import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class LessonComponent extends Component {
	@tracked poem = this.args.poem;
}
