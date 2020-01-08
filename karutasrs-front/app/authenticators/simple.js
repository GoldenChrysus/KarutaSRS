import Base from 'ember-simple-auth/authenticators/base';
import config from "../config/environment";
import { inject as service } from "@ember/service";

export default class SimpleAuthenticator extends Base {
	@service store;

	restore(data) {
		return new Promise(async (resolve, reject) => {
			if (data.success) {
				try {
					await $.ajax({
						url         : config.API_HOST + "/users/" + data.user.id,
						type        : "GET",
						contentType : "application/json",
						headers     : {
							Authorization : `Bearer ${data.user.bearer}`
						}
					});

					resolve(data);
				} catch {
					reject();
				}
			} else {
				reject();
			}
		});
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