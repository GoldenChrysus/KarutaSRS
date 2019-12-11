import JSONAPIAdapter from '@ember-data/adapter/json-api';
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { computed } from "@ember/object";
import config from "../config/environment";

export default JSONAPIAdapter.extend(DataAdapterMixin, {
	host    : config.api_host,
	headers : computed("session.data.authenticated.user", function() {
		let headers = {};

		if (this.session.isAuthenticated) {
			headers.Authorization = `Bearer ${this.session.data.authenticated.user.bearer}`;
		}

		return headers;
	})
});
