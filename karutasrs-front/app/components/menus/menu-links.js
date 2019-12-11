import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class MenusMenuLinksComponent extends Component {
	@service session;

	top         = this.args.top;
	openSidebar = this.args.openSidebar;

	get lesson_queue_length() {
		return (this.session.isAuthenticated) ? this.session.data.authenticated.user.lesson_queue_length : 0;
	}

	get review_queue_length() {
		return (this.session.isAuthenticated) ? this.session.data.authenticated.user.review_queue_length : 0;
	}
}
