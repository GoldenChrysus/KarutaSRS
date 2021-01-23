import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
	store : service("store"),

	state         : "filtering",
	poems         : null,
	learned_poems : null,
	sets          : null,
	quiz_length   : 5,
	current_set   : null,
	current_index : 0,
	incorrect     : null,
	timings       : null,

	init() {
		this.poems         = this.poems || [];
		this.learned_poems = this.learned_poems || [];

		this.reset();
		this._super(...arguments);
	},

	reset() {
		this.sets          = [];
		this.current_index = 0;

		this.set("learned", undefined);
		this.set("incorrect", []);
		this.set("timings", {
			correct   : 0,
			incorrect : 0,
		});
	},

	actions : {
		restart() {
			this.reset();
			this.set("state", "filtering");
		},

		start(filters) {
			let poem_array      = this.poems.toArray();
			let candidate_poems = poem_array.filter((a) => {
				let valid = true;
				
				if (valid && filters.kimariji_length && filters.kimariji_length.length) {
					valid = (filters.kimariji_length.includes(String(a.kimariji.length)));
				}

				if (valid && [0, 1].includes(filters.learned)) {
					let valid_poem_ids = this.learned_poems.map(b => b.poem.get("id"));
					let expected       = (filters.learned === 1) ? true : false;

					valid = (valid_poem_ids.includes(a.id) === expected);
				}

				return valid;
			});

			if (!candidate_poems.length) {
				alert("No eligible poems found. Please try different filters.");
				return false;
			}

			if (!filters.quiz_length || candidate_poems.length < filters.quiz_length) {
				filters.quiz_length = candidate_poems.length;
			}

			this.set("quiz_length", filters.quiz_length);

			for (let i = 0; i < this.quiz_length; i++) {
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

		answer(selected_poem_id, time_elapsed) {
			let incorrect = (selected_poem_id !== +this.current_set.poem.id);

			if (incorrect) {
				let correct_poem   = this.store.peekRecord("poem", this.current_set.poem.id);
				let incorrect_poem = this.store.peekRecord("poem", selected_poem_id);
				let incorrect      = this.incorrect;

				incorrect.push({
					poem         : correct_poem,
					chosen_verse : incorrect_poem.second_verse_answer
				});

				this.set("incorrect", incorrect);
			}

			let timings = this.timings;

			timings[(incorrect) ? "incorrect" : "correct"] += time_elapsed;

			this.set("timings", timings);

			this.current_index++;

			if (this.current_index === this.quiz_length) {
				this.set("state", "results");
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
