import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class MenusSideMenuComponent extends Component {
	@action
	initSidebar() {
		$(this.sidebar).sidebar({
			mobileTransition: "overlay"
		});
		$(this.sidebar).on("click", ".item", () => {
			$(this.sidebar).sidebar("toggle");
		});
	}
}
