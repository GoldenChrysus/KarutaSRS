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

		return {};
	},

	resetControllerData() {
		this.controllerFor("application").send("loadData");
	},

	actions : {
		didTransition() {
			this.resetControllerData();
		}
	}
});
