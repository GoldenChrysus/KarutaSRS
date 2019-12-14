import Component from '@ember/component';
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
	session             : service(),
	user                : {},
	top                 : false,
	openSidebar         : false,
	lessons             : 0,
	reviews             : 0,
	lesson_queue_length : computed("user.lesson_queue_length", function() {
		return this.user.lesson_queue_length || 0;
	}),
	review_queue_length : computed("user.review_queue_length", function() {
		return this.user.review_queue_length || 0;
	}),

	didInsertElement() {
		if (this.top) {
			return;
		}

		$(this.element).sidebar({
			mobileTransition: "overlay"
		});
		$(this.element).on("click", ".item", () => {
			$(this.element).sidebar("toggle");
		});
	}
});
