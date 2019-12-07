import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class GrabberCardComponent extends Component {
	@tracked height;

	@tracked width = this.args.width || "444px";

	text = this.args.text;

	get char_array() {
		let chars        = this.text.split("");
		let result       = [];
		let data         = [
			chars.slice(10, 15), // left column characters
			chars.slice(5, 10), // middle column characters
			chars.slice(0, 5) // right column characters
		];

		for (let i = 0; i < 5; i++) {
			for (let tmp_chars of data) {
				result.push(tmp_chars[i] || "");
			}
		}

		return result;
	}

	@action
	didInsert() {
		this.setHeight();

		$(window).on("resize", () => {
			this.setHeight();
		});
	}

	setHeight() {
		this.height = this.calculateHeight($(this.outer).width());
	}

	calculateHeight(width) {
		let unit_match = String(width).match(/[^\d\.]+/g);

		if (unit_match) {
			width = +width.replace(unit_match[0], "");
		}

		let height = width * 1.3962264150943396226415094339623;

		if (unit_match) {
			height = `${height}${unit_match[0]}`;
		}

		return height;
	}
}