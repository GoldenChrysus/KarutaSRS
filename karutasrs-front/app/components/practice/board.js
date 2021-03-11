import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
	cards : [
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
			this.cards.slice(0, 11),
			this.cards.slice(12, 23),
			this.cards.slice(24, 35)
		];
	})
});