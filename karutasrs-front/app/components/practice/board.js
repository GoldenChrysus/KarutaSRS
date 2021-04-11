import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
	current_drag_index : null,
	inserted           : false,
	cards              : [
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{
			index               : 16,
			hover               : false,
			second_verse_card   : "からくれなゐにみつくくるとは",
			second_verse_answer : "から"
		},
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	],
	rows : computed("cards", function() {
		return [
			this.cards.slice(0, 12),
			this.cards.slice(12, 24),
			this.cards.slice(24, 36)
		];
	}),

	actions : {
		onDragEnter(index, card) {
			let new_cards = JSON.parse(JSON.stringify(this.cards));
			let new_card  = {
				index               : card,
				hover               : true,
				second_verse_card   : this.poems[card].second_verse_card,
				second_verse_answer : this.poems[card].second_verse_answer
			};

			if (window.board_dragging_existing_card) {
				new_cards.splice(window.board_dragging_origin_index, 1);	
			} else if (this.current_drag_index !== null) {
				if (this.inserted) {
					new_cards.splice(this.current_drag_index, 1);
				} else {
					new_cards[this.current_drag_index] = null;
				}
			}

			if (new_cards[index] === null) {
				new_cards[index] = new_card;

				this.inserted = false;
			} else {
				new_cards.splice(index, 0, new_card);

				this.inserted = true;
			}

			if (new_cards.length > 36) {
				new_cards.splice((new_cards.length - 36) * -1);
			}

			this.current_drag_index = index;

			this.set("cards", new_cards);
			console.log("enter " + index);
			console.log(this.cards);
		},

		onDrop() {
			let new_cards = JSON.parse(JSON.stringify(this.cards));

			new_cards[this.current_drag_index].hover = false;

			this.current_drag_index = false;
			this.inserted           = false;

			this.set("cards", new_cards);
		}
	}
});