import Route from '@ember/routing/route';

export default class AuthenticatedReviewsQueueRoute extends Route {
	async model(params) {
		let type  = params.type;
		let queue = [];
		let user  = await this.store.findRecord("user", 1);

		if (type === "lessons") {
			queue = await localForage.getItem("lesson-review-queue");
			queue = JSON.parse(queue).filter((val) => val);

			let tmp_queue       = await user.lesson_queue;
			let tmp_queue_index = {};
			let deleted         = true;

			for (let item of tmp_queue.data) {
				tmp_queue_index[item.id] = true;
			}

			for (let i = 0; i < queue.length; i++) {
				let item = queue[i];

				if (!tmp_queue_index[item.id]) {
					delete queue[i];

					deleted = true;
				}
			}

			if (deleted) {
				queue = queue.filter((val) => val);

				await localForage.setItem("lesson-review-queue", JSON.stringify(queue));
			}
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
