import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import localForage from "localforage";

export default class LessonCarouselSelectorComponent extends Component {
	@service router;

	@tracked current_lesson = 0;
	@tracked queue          = this.args.queue;
	@tracked completed      = [];

	@action
	didInsert() {
		this.updateCompletion(this.current_lesson);
	}

	@action
	changeLesson(index) {
		this.current_lesson = index;

		this.updateCompletion(index);
		this.args.onChange(index);
	}

	@action
	async saveAndTransition() {
		let queue = JSON.stringify(this.queue);

		await localForage.setItem("lesson-review-queue", queue);

		this.router.transitionTo("authenticated.review", "lessons");
	}

	updateCompletion(index) {
		let queue     = JSON.parse(JSON.stringify(this.queue));
		let completed = JSON.parse(JSON.stringify(this.completed));
		
		queue[index].completed = true;

		this.queue = queue;

		if (!completed.includes(index)) {
			completed.push(index);

			this.completed = completed;
		}
	}
}
