import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
	classNames : [
		"grabber-card-outer"
	],
	classNameBindings : [
		"size",
		"text_length",
		"inverted"
	],
	attributeBindings : [
		"key:key",
		"draggable"
	],
	height      : 0,
	width       : "444px",
	text        : "",
	card        : "",
	answer      : "",
	type        : "",
	validate    : false,
	inverted    : false,
	text_length : computed("text", function() {
		return (this.text.length === 16) ? "sixteen-length" : "fifteen-length";
	}),
	index : computed("card_index", "row_index", function() {
		return this.card_index + (this.row_index * 12);
	}),
	char_array : computed("text", "answer", function() {
		let chars_array  = this.text.split("");
		let answer_array = (this.answer) ? this.answer.split("") : [];
		let card_array   = (this.card) ? this.card.split("") : [];
		let char_data    = [];

		if (chars_array.length < 15) {
			for (let i = chars_array.length; i < 15; i++) {
				chars_array.push("");
			}
		}

		for (let i in chars_array) {
			char_data.push({
				char       : chars_array[i],
				is_correct : (chars_array[i] === card_array[i] || chars_array[i] === answer_array[i]),
				is_answer  : (i < answer_array.length)
			});
		}

		let result      = [];
		let column_data = [
			char_data.slice(10), // left column characters
			char_data.slice(5, 10), // middle column characters
			char_data.slice(0, 5) // right column characters
		];

		for (let i = 0; i < 5; i++) {
			for (let tmp_chars of column_data) {
				result.push(tmp_chars[i] || {});
			}
		}

		if (this.text.length === 16) {
			result.push(column_data[0][5]);
		}

		return result;
	}),

	init() {
		this._super(...arguments);

		if (this.type === "demo") {
			this.backup_text   = this.text;
			this.current_index = 0;

			this.set("text", "");

			this.interval = setInterval(
				() => {
					this.set("text", this.backup_text.slice(0, ++this.current_index));

					if (this.current_index === this.backup_text.length) {
						clearInterval(this.interval);
					}
				},
				1000
			);
		}
	},

	didInsertElement() {
		$(this.element).css("width", this.width);
		this.setHeight();
	},

	didRender() {
		$(window).on("resize", this.setHeight.bind(this));
	},

	willDestroyElement() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	},

	setHeight() {
		let $element = $(this.element);

		let width;

		switch (this.type) {
			case "board":
				width = $element
					.closest(".board-row")
					.find("div")
					.first()
					.width();

				break;

			case "deck":
				width = $element
					.closest("div")
					.width();

				break;

			default:
				width = ($element.is(":visible"))
					? $element.width()
					: $element
						.parentsUntil(":visible")
						.last()
						.width();

				break;
		}

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