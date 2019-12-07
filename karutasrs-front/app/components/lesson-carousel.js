import Component from '@glimmer/component';

export default class LessonCarouselComponent extends Component {
	queue            = this.args.queue;
	multiple_lessons = (this.args.queue.length > 1);
}
