import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
	store : service(),

	async model() {
		return {
			user : await this.store.findRecord("user", 1)
		}
	}
});
