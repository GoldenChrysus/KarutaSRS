import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class GrabberCardCharacterComponent extends Component {
	@tracked char = this.args.char;

	is_answer   = this.args.is_answer;
	is_learning = (this.args.type === "learn");

	get classes() {
		let classes = [];

		if (this.is_answer && this.is_learning) {
			classes.push("learn");
		}

		if (this.char) {
			classes.push("active");
		}

		return classes.join(" ");
	}
}
