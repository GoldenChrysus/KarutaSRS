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
	type          : "login",
	processing    : false,

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
				},
				confirm_password : {
					identifier : "confirm_password",
					rules      : [
						{
							type   : "empty",
							prompt : "Confirm your password."
						},
						{
							type   : "match[password]",
							prompt : "Passwords must match."
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
		handleSubmit() {
			if (this.processing) {
				return false;
			}

			this.processing = true;

			let action = (this.type === "login") ? "login" : "register";

			this.send(action);
			return false;
		},

		login() {
			this.set("login_error", false);

			if (!this.formIsValid()) {
				this.processing = false;

				return false;
			}

			let email    = this.email;
			let password = this.password;

			this.session.authenticate("authenticator:simple", email, password)
				.then(() => {
					// transition
				})
				.catch(() => {
					this.processing = false;

					this.set("login_error", true);
					this.set("login_message", "Login failed. Please try again.");
				});

			return false;
		},

		async register() {
			this.set("login_error", false);

			if (!this.formIsValid()) {
				this.processing = false;

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
					let data = {
						success : true,
						user    : Object.assign({}, user.toJSON(), {id : user.id})
					};

					this.session.authenticate("authenticator:simple", data)	
						.then(() => {
							this.session.set("data.new_account", true);
							// transition
						})
						.catch((e) => {
							this.processing = false;

							this.set("login_error", true);
							this.set("login_message", "Authentication failed. Please try reloading the page.");
						});
				})
				.catch((e) => {
					this.processing = false;

					this.set("login_error", true);
					this.set("login_message", "Registration failed. Do you already have an account?");
				});

			return false;
		}
	}
});
