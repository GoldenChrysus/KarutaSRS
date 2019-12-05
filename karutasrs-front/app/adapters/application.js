import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from "./../config/environment";
import { inject as service } from "@ember/service";

export default class ApplicationAdapter extends JSONAPIAdapter {
	host    = ENV.APP.api_host;
	session = service();

	init() {
		this._super(...arguments);

		let session = this.session;
		let token   = (session.isAuthenticated) ? session.data.authenticated.data.user.bearer : "";

		this.set(
			"headers",
			{
				"Authorization" : `Bearer ${token}`
			}
		);
	}
}
