import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin, {
	user_serv : service("current-user"),

	async model() {
		let user          = this.user_serv.peekUser();
		let messages      = await $.getJSON("/data/messages.json");
		let user_messages = [];
		let seen_messages = localStorage.getItem("seen_messages");
		let new_messages  = false;

		try {
			seen_messages = JSON.parse(seen_messages) || [];
		} catch (e) {
			seen_messages = [];
		}

		for (let i = 0; i < messages.length; i++) {
			let message = messages[i];

			if (message.type !== "dashboard") {
				continue;
			}

			if (message.date < user.created_at) {
				continue;
			}

			if (seen_messages.includes(i)) {
				continue;
			}

			user_messages.push(message.message);
			seen_messages.push(i);

			new_messages = true;
		}

		if (new_messages) {
			localStorage.setItem("seen_messages", JSON.stringify(seen_messages));
		}

		return {
			messages : user_messages
		};
	}
});
