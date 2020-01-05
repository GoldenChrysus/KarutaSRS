import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import localForage from "localforage";

export default class LessonCarouselSelectorComponent extends Component {
	@service router;

	@tracked current_lesson = 0;
	@tracked queue          = this.args.queue || [];
	@tracked completed      = [];

	demo = this.args.demo || false;

	@action
	didInsert() {
		this.updateCompletion(this.current_lesson);

		let $carousel = $(this.steps).closest(".lesson-carousel");

		if (!$carousel.length) {
			return;
		}

		$carousel.swipe({
			allowPageScroll       : "vertical",
			fallbackToMouseEvents : false,
			swipe                 : (e, direction) => {
				if (["up", "down"].includes(direction)) {
					return true;
				}

				let new_index;

				let max_index = this.queue.length - 1;

				switch(direction) {
				case "left":
					new_index = (this.current_lesson === max_index) ? 0 : this.current_lesson + 1;

					break;

				case "right":
					new_index = (this.current_lesson === 0) ? max_index : this.current_lesson - 1;

					break;
				}

				this.changeLesson(new_index);
			}
		});
	}

	@action
	changeLesson(index) {
		this.current_lesson = index;

		document.querySelectorAll("audio").forEach((audio) => {
			audio.pause();
		});

		this.updateCompletion(index);
		this.args.onChange(index);
	}

	@action
	async saveAndTransition() {
		if (this.demo) {
			return false;
		}

		let queue = JSON.stringify(this.queue);

		await localForage.setItem("lesson-review-queue", queue);

		this.router.transitionTo("authenticated.reviews.queue", "lessons");
	}

	updateCompletion(index) {
		let queue     = JSON.parse(JSON.stringify(this.queue));
		let completed = JSON.parse(JSON.stringify(this.completed));

		if (!queue[index]) {
			return;
		}
		
		queue[index].completed = true;

		this.queue = queue;

		if (!completed.includes(index)) {
			completed.push(index);

			this.completed = completed;
		}
	}
}
