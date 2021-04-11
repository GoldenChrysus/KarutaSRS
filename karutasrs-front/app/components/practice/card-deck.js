import Component from "@ember/component";

export default Component.extend({
	classNames : [
		"card-deck"
	],

	cards : [
		{
			index               : 0,
			second_verse_card   : "わかころもてはつゆにぬれつつ",
			second_verse_answer : "わかころもては"
		}
	],

	actions : {
		onDrop() {
			this.onDrop();
		}
	}
});