import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class LessonCarouselSelectorComponent extends Component {
	@tracked current_lesson = 0;

	queue = this.args.queue;

	@action
	changeLesson(index) {
		this.current_lesson = index;

		this.args.onChange(index);
	}
}
