import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class MenusTopMenuComponent extends Component {
	@action
	openSidebar() {
		$(document).find("#side-menu").sidebar("toggle");
	}
}
