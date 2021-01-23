import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session         : service(),
	user            : undefined,
	top             : false,
	openSidebar     : false,
	kimariji_length : "",
	card_count      : "",

	didInsertElement() {
		$(this.element)
			.find(".ui.dropdown")
			.dropdown();
	},

	actions : {
		start() {
			this.start({
				kimariji_length : this.kimariji_length.split(","),
				card_count      : +this.card_count
			});
		}
	}
});
