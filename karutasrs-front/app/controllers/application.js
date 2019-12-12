import Controller from '@ember/controller';

import { inject as service } from "@ember/service";

export default Controller.extend({
	user_serv           : service("current-user"),
	user                : {},
	lesson_queue_length : 0,
	review_queue_length : 0,
	actions             : {
		async loadData() {
			let user = await this.user_serv.getUser();

			this.set("user", user);
			this.set("lesson_queue_length", user.lesson_queue_length);
			this.set("review_queue_length", user.review_queue_length);
		}
	}
});
