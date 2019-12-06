import Component from '@ember/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import config from "../config/environment";

export default Component.extend({
	title   : config.name,
	session : service(),

	didInsert(element) {
		$(element).find("#login-form").form({
			inline : true,
			fields : {
				email    : {
					identifier : "email",
					rules      : [
						{
							type   : "empty",
							prompt : "Enter your email."
						},
						{
							type   : "email",
							prompt : "Enter a valid email."
						}
					]
				},
				password : {
					identifier : "password",
					rules      : [
						{
							type   : "empty",
							prompt : "Enter your password."
						}
					]
				}
			}
		});
	},

	actions : {
		login() {
			this.login_error = false;

			let email    = this.email;
			let password = this.password;

			this.session.authenticate("authenticator:simple", email, password)
				.then(() => {
					// transition
				})
				.catch(() => {
					this.login_error = true;
				});
		}
	}
});
