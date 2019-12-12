import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
	user_serv : service("current-user"),

	async model() {
		let user  = this.user_serv.peekUser();
		let items = await user.review_queue;

		return {
			review_queue_length : items.data.length
		}
	}
});