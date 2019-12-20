import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
	user_serv : service("current-user"),

	model() {
		let model = {
			new_account : false
		};

		if (this.session.data.new_account) {
			this.session.set("data.new_account", false);

			model.new_account = true;
		}

		return model;
	}
});
