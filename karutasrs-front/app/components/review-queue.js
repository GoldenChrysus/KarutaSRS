import Component from "@ember/component";
import { inject as service } from "@ember/service";
import localForage from "localforage";

export default Component.extend({
	store               : service(),
	queue               : [],
	type                : "",
	chunk               : [],
	answers             : {},
	last_pushed_index   : 0,
	current_chunk_index : 0,
	user                : {},

	init() {
		this._super(...arguments);
		this.chunkQueue();
	},

	chunkQueue() {
		for (let i = 0; i < 10; i++) {
			if (!this.queue[i]) {
				break;
			}

			this.pushItemToChunk(i);

			this.last_pushed_index = i;
		}

		this.setActiveReview();
	},

	pushItemToChunk(index) {
		let item = this.queue[index];

		if (!item) {
			return;
		}

		let poem = (this.type === "lessons") ? item : {};

		for (let review_type of ["grabber", "kimariji"]) {
			this.chunk.push({
				type : review_type,
				poem : poem,
				id   : index
			});
		}
	},

	setActiveReview() {
		this.current_chunk_index = Math.floor(Math.random() * Math.floor(this.chunk.length - 1));

		this.set("current_poem", this.chunk[this.current_chunk_index].poem);
		this.set("current_type", this.chunk[this.current_chunk_index].type);
		this.set("current_id", this.chunk[this.current_chunk_index].id);
	},

	actions : {
		async completeReview(correct) {
			let id = this.current_id;

			if (!this.answers[id]) {
				this.answers[id] = {
					"wrong"    : 0,
					"kimariji" : false,
					"grabber"  : false
				};
			}

			if (!correct) {
				this.answers[id].wrong++;
			} else {
				this.answers[id][this.current_type] = true;
			}

			if (this.answers[id].kimariji && this.answers[id].grabber) {
				if (this.type === "lessons") {
					let learned_item = this.store.createRecord(
						"learned-item",
						{
							user : this.user,
							poem : await this.store.findRecord("poem", this.queue[id].id)
						}
					);

					delete this.queue[id];
					await localForage.setItem("lesson-review-queue", JSON.stringify(this.queue));
					await learned_item.save();
				}

				this.pushItemToChunk(this.last_pushed_index + 1);
				this.last_pushed_index++;
			}

			if (correct) {
				delete this.chunk[this.current_chunk_index];
			}

			this.chunk = this.chunk.filter((val) => val);

			if (this.chunk.length) {
				this.setActiveReview();
			} else {
				// exit review session
			}
		}
	}
});
