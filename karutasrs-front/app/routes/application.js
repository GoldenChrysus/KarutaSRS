import Route from '@ember/routing/route';
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(ApplicationRouteMixin, {
	session   : service(),
	prefilter : service("ajax-prefilter"),
	user      : service("current-user"),

	async sessionAuthenticated() {
		this._super(...arguments);
		this.refresh();
	},

	async model() {
		this.prefilter.injectBearer();
		await this.user.getUser();

		return {};
	},

	async resetControllerData() {
		await this.controllerFor("application").send("loadData");
	},

	actions : {
		async didTransition() {
			await this.resetControllerData();
		}
	}
});
