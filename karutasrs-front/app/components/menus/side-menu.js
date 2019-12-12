import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class MenusSideMenuComponent extends Component {
	@tracked user = this.args.user || {};

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
