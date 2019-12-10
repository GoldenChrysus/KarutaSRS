import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class TopMenuComponent extends Component {
	@action
	initSidebar() {
		$(this.sidebar).sidebar();
	}

	@action
	openSidebar() {
		$(this.sidebar).sidebar("toggle");
	}
}
