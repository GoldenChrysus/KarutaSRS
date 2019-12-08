import Route from '@ember/routing/route';
import localForage from "localforage";

export default class AuthenticatedReviewRoute extends Route {
	async model(params) {
		let type  = params.type;
		let queue = [];
		let user  = await this.store.findRecord("user", 1);

		if (type === "lessons") {
			queue = await localForage.getItem("lesson-review-queue");
			queue = JSON.parse(queue).filter((val) => val);
		} else if (type === "reviews") {
			queue = await user.review_queue;
			queue = queue.data;
		}

		return {
			queue : queue,
			type  : type,
			user  : user
		};
	}
}
