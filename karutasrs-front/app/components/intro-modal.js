import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class IntroModalComponent extends Component {
	active = this.args.active || false;

	@action
	didInsert() {
		if (this.active) {
			$(this.modal).modal("show");
		}
	}
}
