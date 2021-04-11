import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
	classNameBindings : [
		"hover"
	],
	dropzone   : false,
	draggable  : true,
	in_deck    : false,
	card_index : null,
	row_index  : null,
	index      : computed("card_index", "row_index", function() {
		return this.card_index + (this.row_index * 12);
	}),
	grabber_type : computed("in_deck", function() {
		return (this.in_deck) ? "deck" : "board";
	}),
	grabber_size : computed("in_deck", function() {
		let classes = ["board"];

		if (this.in_deck) {
			classes.push("deck");
		}

		return classes.join(" ");
	}),

	didInsertElement() {
		this.setHeight();
	},

	didRender() {
		$(window).on("resize", this.setHeight.bind(this));
	},

	setHeight() {
		let $element = $(this.element).find(".card");

		// If not visible, the card is in an accordion, so get the width of the nearest visible parent to get the width of this card
		let width = $(this.element).width();

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
	},

	actions : {
		onDragStart(e) {
			if (!this.draggable) {
				e.preventDefault();
				return false;
			}

			window.board_dragging_card          = this.card.index;
			window.board_dragging_existing_card = (!this.card.hover && !this.in_deck);
			window.board_dragging_origin_index  = this.index;
		},

		onDragEnter(e) {
			if (!this.dropzone || !this.draggable || this.in_deck) {
				e.preventDefault();
				return false;
			}

			console.log(this.index + " entering");
			this.onDragEnter(this.index, window.board_dragging_card);
		},

		onDrop(e) {
			if (!this.draggable) {
				e.preventDefault();
				return false;
			}

			this.onDrop();
		}
	}
});