import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class LessonCarouselSelectorComponent extends Component {
	@tracked current_lesson = 0;

	@tracked queue = this.args.queue;

	completed = [];

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

	updateCompletion(index) {
		let queue = JSON.parse(JSON.stringify(this.queue));
		
		queue[index].completed = true;

		this.queue = queue;

		if (!this.completed.includes(index)) {
			this.completed.push(index);
		}
	}
}
