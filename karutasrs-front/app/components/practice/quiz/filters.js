import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	session         : service(),
	user            : undefined,
	top             : false,
	openSidebar     : false,
	kimariji_length : "",
	card_count      : null,
	quiz_length     : null,
	learned         : undefined,

	didInsertElement() {
		$(this.element)
			.find(".ui.dropdown")
			.dropdown();
	},

	actions : {
		start() {
			if (!this.card_count) {
				alert("Please select the number of cards to display.");
				return false;
			}

			if (this.quiz_length && (isNaN(this.quiz_length) || +this.quiz_length <= 0 || this.quiz_length > 100)) {
				alert("Please enter a quiz length between 1 and 100 or leave it blank.");
				return false;
			}

			this.start({
				kimariji_length : (this.kimariji_length) ? this.kimariji_length.split(",") : [],
				card_count      : +this.card_count,
				quiz_length     : +this.quiz_length,
				learned         : (this.learned === undefined) ? -1 : +this.learned
			});
		}
	}
});
