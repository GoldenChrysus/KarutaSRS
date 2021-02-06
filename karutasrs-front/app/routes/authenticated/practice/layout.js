import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
	async model() {
		let poems = await this.store.findAll("poem");

		return {
			poems
		};
	}
});
