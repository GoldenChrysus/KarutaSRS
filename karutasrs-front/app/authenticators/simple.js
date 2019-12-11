import Base from 'ember-simple-auth/authenticators/base';
import config from "../config/environment";

export default class SimpleAuthenticator extends Base {
	restore(data) {
		return (data.success) ? Promise.resolve(data) : Promise.reject();
	}

	authenticate(email, password) {
		return new Promise((resolve, reject) => {
			$.ajax({
				url         : config.api_host + "/sessions/authenticate",
				type        : "POST",
				contentType : "application/json",
				data        : JSON.stringify({
					email    : email || "",
					password : password || "",
				})
			})
			.then((response) => {
				if (!response.data.success) {
					reject(response);
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