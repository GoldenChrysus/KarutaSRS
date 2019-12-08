import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
	store : service(),

	async model() {
		let user  = await this.store.findRecord("user", 1);
		let queue = await user.lesson_queue;
		let poem  = await this.store.findRecord("poem", 17);

		return {
			user  : user,
			queue : queue.data,
			poem  : poem
		}
	}
});
