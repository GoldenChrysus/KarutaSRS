import Base from 'ember-simple-auth/authenticators/base';
import config from "../config/environment";
import { inject as service } from "@ember/service";

export default class SimpleAuthenticator extends Base {
	@service store;

	async restore(data) {
		if (data.success) {
			try {
				await this.store.findRecord("user", data.authenticated.user.id);
				Promise.resolve(data);
			} catch {
				Promise.reject();
			}
		} else {
			Promise.reject();
		}
	}

	authenticate() {
		return new Promise((resolve, reject) => {
			if (typeof arguments[0] === "object" && arguments[0] !== null) {
				if (arguments[0].success) {
					resolve(arguments[0]);
				} else {
					reject(arguments[0]);
				}

				return;
			}

			$.ajax({
				url         : config.API_HOST + "/sessions/authenticate",
				type        : "POST",
				contentType : "application/json",
				data        : JSON.stringify({
					email    : arguments[0] || "",
					password : arguments[1] || "",
				})
			})
				.then((response) => {
					if (!response.data.success) {
						reject(response.data);
						return;
					}

					resolve(response.data);
				})
				.catch((e) => {
					reject(e);
				});
		});
	}
}