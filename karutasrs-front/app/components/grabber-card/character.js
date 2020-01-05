import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend({
	classNames : [
		"character"
	],
	classNameBindings : [
		"char:active",
		"validation",
		"learning"
	],
	index       : 0,
	char        : "",
	validate    : false,
	is_answer   : false,
	is_correct  : false,
	is_learning : computed("type", function() {
		return (["learn", "demo"].includes(this.type));
	}),
	validation : computed("validate", "is_correct", function() {
		return (this.validate)
			? ((this.is_correct)
				? "correct"
				: "incorrect")
			: "";
	}),
	learning : computed("is_answer", "is_learning", function() {
		return (this.is_answer && this.is_learning) ? "learn" : "";
	}),
});
