import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class GrabberCardComponent extends Component {
	@tracked height;
	@tracked width = this.args.width || "444px";

	@action
	didInsert() {
		this.height = this.calculateHeight($(this.outer).width());

		$(window).on("resize", () => {
			this.height = this.calculateHeight($(this.outer).width());
		});
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