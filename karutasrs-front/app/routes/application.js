import Route from '@ember/routing/route';
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(ApplicationRouteMixin, {
	session   : service(),
	prefilter : service("ajax-prefilter"),

	async sessionAuthenticated() {
		this._super(...arguments);
		this.refresh();
	},

	async model() {
		// let poems = await this.store.findAll("poem");

		/* poems.forEach(async (poem) => {
			let items = await poem.learned_items;

			// console.log(items);
		}); */

		// let user = await this.store.findRecord("user", 1);

		this.prefilter.injectBearer();

		return {
			// poems : poems
		};
	}
});
