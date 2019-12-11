import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class MenusMenuLinksComponent extends Component {
	@service session;
	@service current_user;

	top         = this.args.top;
	openSidebar = this.args.openSidebar;

	get lesson_queue_length() {
		let user = this.current_user.peekUser();

		return user.lesson_queue_length || 0;
	}

	get review_queue_length() {
		let user = this.current_user.peekUser();

		return user.review_queue_length || 0;
	}
}
