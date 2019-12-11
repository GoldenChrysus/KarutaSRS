import Component from "@ember/component";
import { inject as service } from "@ember/service";
import localForage from "localforage";
import config from "../config/environment";

export default Component.extend({
	store               : service(),
	router              : service("router"),
	queue               : [],
	type                : "",
	chunk               : [],
	answers             : {},
	last_pushed_index   : 0,
	current_chunk_index : 0,
	user                : {},

	async init() {
		this._super(...arguments);
		this.chunkQueue();

		let saved_answers = await localForage.getItem(`review-queue-answers-${this.type}`);

		if (saved_answers) {
			try {
				this.answers = JSON.parse(saved_answers);
			} catch (e) {
				this.answers = {};
			}
		}

		console.log("Answers:");
		console.log(this.answers);
		console.log("Queue:");
		console.log(this.queue);
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

		let poem = (this.type === "lessons") ? item : item.poem;

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

		console.log("Chunk:");
		console.log(this.chunk);

		this.set("current_poem", this.chunk[this.current_chunk_index].poem);
		this.set("current_type", this.chunk[this.current_chunk_index].type);
		this.set("current_id", this.chunk[this.current_chunk_index].id);
	},

	actions : {
		async completeReview(correct) {
			console.log("Current ID:");
			console.log(this.current_id);
			console.log("Queue:");
			console.log(this.queue);
			let id      = this.current_id;
			let item_id = this.queue[id].id;

			if (!this.answers[item_id]) {
				this.answers[item_id] = {
					"wrong"    : 0,
					"kimariji" : false,
					"grabber"  : false
				};
			}

			if (!correct) {
				this.answers[item_id].wrong++;
			} else {
				this.answers[item_id][this.current_type] = true;
			}

			if (correct) {
				delete this.chunk[this.current_chunk_index];
			}

			this.chunk = this.chunk.filter((val) => val);

			if (this.answers[item_id].kimariji && this.answers[item_id].grabber) {
				if (this.type === "lessons") {
					let learned_item = this.store.createRecord(
						"learned-item",
						{
							user : this.user,
							poem : await this.store.findRecord("poem", item_id)
						}
					);

					await localForage.setItem("lesson-review-queue", JSON.stringify(this.queue));
					await learned_item.save();
				} else {
					let request = {
						url         : `${config.api_host}/learned-items/${item_id}/complete-review`,
						type        : "POST",
						contentType : "application/json",
						data        : JSON.stringify({
							wrong_answers : this.answers[item_id].wrong
						})
					};
					let result  = await $.ajax(request);
				}

				this.pushItemToChunk(this.last_pushed_index + 1);
				this.last_pushed_index++;
				delete this.answers[item_id];
			}

			await localForage.setItem(`review-queue-answers-${this.type}`, JSON.stringify(this.answers));
		},

		triggerNextReview() {
			if (this.chunk.length) {
				this.setActiveReview();
			} else {
				this.router.transitionTo("authenticated.review", "list");
			}
		}
	}
});
