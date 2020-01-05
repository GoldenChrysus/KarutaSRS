import Component from '@ember/component';
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
	poem_serv  : service("poem"),
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
		changeNotes(notes) {
			console.log(notes);
		}
	}
});
