import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class LessonCarouselComponent extends Component {
	@tracked current_lesson = 0;

	queue            = this.args.queue;
	multiple_lessons = (this.args.queue.length > 1);
}
