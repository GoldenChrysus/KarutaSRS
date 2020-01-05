import Component from '@ember/component';
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
	session             : service(),
	user                : undefined,
	top                 : false,
	openSidebar         : false,
	lesson_queue_length : computed("user.lesson_queue_length", function() {
		return this.user.lesson_queue_length || 0;
	}),
	review_queue_length : computed("user.review_queue_length", function() {
		return this.user.review_queue_length || 0;
	}),

	init() {
		this.user        = this.user || {};
		this.openSidebar = this.openSidebar || function() {};

		this._super(...arguments);
	},

	didInsertElement() {
		if (this.top) {
			return;
		}

		$(this.element).sidebar({
			mobileTransition : "overlay"
		});
		$(this.element).on("click", ".item", () => {
			$(this.element).sidebar("toggle");
		});
	}
});
