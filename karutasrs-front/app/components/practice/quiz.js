import Component from '@ember/component';

export default Component.extend({
	state         : "filtering",
	poems         : [],
	learned       : [],
	sets          : [],
	quiz_length   : 5,
	current_set   : null,
	current_index : 0,
	incorrect     : [],

	actions : {
		start(filters) {
			let poem_array      = this.poems.toArray();
			let candidate_poems = poem_array.filter((a) => {
				return (filters.kimariji_length.includes(String(a.kimariji.length)));
			});

			for (let i = 0; i < this.quiz_length; i++) { // hard-coded quiz length
				let index           = Math.floor(Math.random() * candidate_poems.length);
				let poem            = candidate_poems[index];
				let main_poem_index = 0;

				for (let i = 0; i < poem_array.length; i++) {
					if (poem_array[i].id === poem.id) {
						main_poem_index = i;

						break;
					}
				}

				let cards = this.selectCards(main_poem_index, filters.card_count, poem_array);

				this.sets.push({
					poem  : poem,
					cards : cards
				});

				candidate_poems.splice(index, 1);

				if (!candidate_poems.length) {
					break;
				}
			}

			this.set("current_set", this.sets[0]);
			this.set("state", "playing");
		},

		answer(selected_poem_id) {
			if (selected_poem_id !== +this.current_set.poem.id) {
				// track incorrect answer
			}

			this.current_index++;

			if (this.current_index === this.quiz_length) {
				return;
			}

			this.set("current_set", this.sets[this.current_index]);
		}
	},

	selectCards(main_poem_index, count, poem_array) {
		let card_indices = [main_poem_index];
		let cards        = [];

		while (card_indices.length < count) {
			let index = Math.floor(Math.random() * poem_array.length);

			if (card_indices.includes(index)) {
				continue;
			}

			card_indices.push(index);
		}

		for (let index of card_indices) {
			cards.push(poem_array[index]);
		}

		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			[cards[i], cards[j]] = [cards[j], cards[i]];
		}

		return cards;
	}
});
