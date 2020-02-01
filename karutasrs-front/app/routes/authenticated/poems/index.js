import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
	user : service("current-user"),

	async model() {
		let poems   = await this.store.findAll("poem");
		let learned = await this.store.query(
			"learned-item",
			{
				filter : {
					user_id : this.user.peekUser().id
				},
				include : "poem"
			}
		);

		return {
			poems,
			learned
		};
	}
});
