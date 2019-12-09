import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend({
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
