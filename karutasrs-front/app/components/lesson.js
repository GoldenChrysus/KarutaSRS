import Component from '@ember/component';
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
	poem_serv         : service("poem"),
	classNames        : [
		"ui",
		"centered",
		"grid",
		"lesson"
	],
	classNameBindings : [
		"slideRight"
	],
	slideRight        : "",
	poem              : {},
	stacked           : false,
	first_verse       : computed("poem", function() {
		return this.poem_serv.formatFirstVerse(this.poem.first_verse);
	}),
	archaic_warnings  : computed("poem", function() {
		let warnings = [];

		if ((this.poem.first_verse + this.poem.second_verse_card).includes("ゑ")) {
			warnings.push("ゑ can be written as 'e'.");
		}

		if ((this.poem.first_verse + this.poem.second_verse_card).includes("ゐ")) {
			warnings.push("ゐ can be written as 'i' or 'wi'.");
		}

		return warnings;
	}),

	didRender() {
		$(this.element).find("audio")[0].load();
	}
});
