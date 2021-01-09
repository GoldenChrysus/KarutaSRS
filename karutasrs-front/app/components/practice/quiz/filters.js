import Component from '@ember/component';
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
	session             : service(),
	user                : undefined,
	top                 : false,
	openSidebar         : false,
	kimariji_length     : "",
	card_count          : "",

	didInsertElement() {
		$(this.element)
			.find(".ui.dropdown")
			.dropdown();
	},

	actions : {
		start() {
			console.log(this.kimariji_length);
			console.log(this.card_count);
		}
	}
});
