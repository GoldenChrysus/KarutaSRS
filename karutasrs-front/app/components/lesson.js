import Component from '@ember/component';
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
	poem_serv  : service("poem"),
	user_serv  : service("current-user"),
	store      : service("store"),
	classNames : [
		"ui",
		"centered",
		"grid",
		"lesson"
	],
	classNameBindings : [
		"slideRight"
	],
	slideRight  : "",
	poem        : undefined,
	stacked     : false,
	first_verse : computed("poem", function() {
		return this.poem_serv.formatFirstVerse(this.poem.first_verse);
	}),
	translation : computed("poem", function() {
		return this.poem_serv.formatTranslation(this.poem.translation);
	}),
	background : computed("poem", function() {
		let background = [];

		try {
			background = JSON.parse(this.poem.background);
		} catch {
			console.log(this.poem.background);
			background = [];
		}

		return background;
	}),
	archaic_warnings : computed("poem", function() {
		let warnings = [];

		if (String(this.poem.first_verse + this.poem.second_verse_card).includes("ゑ")) {
			warnings.push("ゑ can be written as 'e'.");
		}

		if (String(this.poem.first_verse + this.poem.second_verse_card).includes("ゐ")) {
			warnings.push("ゐ can be written as 'i' or 'wi'.");
		}

		return warnings;
	}),
	type         : "carousel",
	grabber_size : "standalone-lesson",
	classes      : computed("stacked", function() {
		if (this.stacked) {
			return "sixteen wide";
		}

		switch (this.type) {
			case "carousel":
				return "six wide widescreen six wide large screen eight wide computer eight wide tablet sixteen wide mobile";

			case "standalone":
				return "eight wide widescreen eight wide large screen eight wide computer eight wide tablet sixteen wide mobile";
		}

		return "";
	}),

	init() {
		this.poem = this.poem || {};

		this._super(...arguments);

		if (!this.poem.id) {
			throw new Error("No poem provided for the lesson.");
		}
	},

	didRender() {
		$(this.element).find("audio")[0].load();
	},

	actions : {
		async changeNotes(notes) {
			let user = this.user_serv.peekUser();
			let note = await this.store.query(
				"poem-note",
				{
					filter : {
						user_id : user.id,
						poem_id : this.poem.id
					}
				}
			);

			if (note.length) {
				note = note.get("firstObject");
			} else {
				let poem = this.poem;

				if (poem.constructor.name !== "PoemModel") {
					poem = await this.store.findRecord("poem", poem.id);
				}

				note = this.store.createRecord(
					"poem-note",
					{
						user : user,
						poem : poem
					}
				);
			}

			note.note = notes;

			await note.save();
		}
	}
});
