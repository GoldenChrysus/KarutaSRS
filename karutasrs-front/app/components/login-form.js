import Component from '@ember/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import config from "../config/environment";

export default Component.extend({
	title         : config.name,
	session       : service(),
	store         : service("store"),
	login_error   : false,
	login_message : "",

	didRender() {
		$(this.element).find("#login-form").form({
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

	formIsValid() {
		return $(this.element).find("#login-form").form("validate form");
	},

	actions : {
		login() {
			this.set("login_error", false);

			if (!this.formIsValid()) {
				return false;
			}

			let email    = this.email;
			let password = this.password;

			this.session.authenticate("authenticator:simple", email, password)
				.then(() => {
					// transition
				})
				.catch(() => {
					this.set("login_error", true);
					this.set("login_message", "Login failed. Please try again.");
				});
		},

		async register() {
			this.set("login_error", false);

			if (!this.formIsValid()) {
				return false;
			}

			let user = await this.store.createRecord(
				"user",
				{
					email    : this.email,
					password : this.password
				}
			);

			user.save()
				.then(() => {
					// transition
				})
				.catch(() => {
					this.set("login_error", true);
					this.set("login_message", "Registration failed. Do you already have an account?");
				});
		}
	}
});
