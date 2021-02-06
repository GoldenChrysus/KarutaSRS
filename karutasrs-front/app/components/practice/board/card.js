import Component from "@ember/component";

export default Component.extend({
	classNames : [
		"card"
	],
	classNameBindings : [
		"type"
	],
	type : "placeholder",

	didInsertElement() {
		this.setHeight();
	},

	didRender() {
		$(window).on("resize", this.setHeight.bind(this));
	},

	setHeight() {
		let $element = $(this.element);

		// If not visible, the card is in an accordion, so get the width of the nearest visible parent to get the width of this card
		let width = ($element.is(":visible"))
			? $element.width()
			: $element
				.parentsUntil(":visible")
				.last()
				.width();

		if (!width) {
			$(window).off("resize", this.setHeight.bind(this));
			return;
		}

		$element.css("height", this.calculateHeight(width));
	},

	calculateHeight(width) {
		let unit_match = String(width).match(/[^\d.]+/g);

		if (unit_match) {
			width = +width.replace(unit_match[0], "");
		}

		let height = width * 1.3962264150943396226415094339623;

		if (unit_match) {
			height = `${height}${unit_match[0]}`;
		}

		return `${height}px`;
	}
});