import Component from '@ember/component';
import { action, computed } from "@ember/object";
import { bind as bindWanaKana, isKana } from "wanakana"

export default Component.extend({
	validate     : false,
	type         : "",
	poem         : {},
	user_input   : "",
	is_correct   : false,
	answered     : 0,
	grabber_text : computed("type", "second_verse_card", "user_input", function() {
		return (this.type === "grabber") ? this.user_input || "" : this.poem.second_verse_card;
	}),
	input_element : computed("element", function() {
		return $(this.element).find("input")[0]
	}),
	input_classes : computed("is_correct", "answered", function() {
		let classes = [];

		if (this.answered) {
			classes.push("disabled");
			classes.push((this.is_correct) ? "correct" : "incorrect");
		}

		return classes.join(" ");
	}),

	didRender() {
		bindWanaKana(
			this.input_element,
			{
				IMEMode: "toHiragana"
			}
		);
		this.focusInput();
	},

	focusInput() {
		this.input_element.focus();
	},

	submitAnswer() {
		if (this.answered) {
			return;
		}

		if (!this.user_input) {
			return;
		}

		if (!isKana(this.user_input)) {
			return;
		}

		this.set("answered", true);

		if (this.type === "grabber") {
			this.set("validate", true);
		}

		let answer = (this.type === "grabber") ? this.poem.second_verse_answer : this.poem.kimariji;
		let input  = this.user_input.trim();

		if (this.type === "grabber") {
			this.set("is_correct", input.substring(0, answer.length) === answer);
		} else {
			this.set("is_correct", input === answer);
		}

		$(this.input_element).attr("disabled", true);
	},

	actions : {
		handleInput(e) {
			if (e.keyCode === 13) {
				return this.submitAnswer();
			}

			this.set("validate", false);

			let val = $(this.input_element).val();

			if (val && !isKana(val)) {
				return;
			}

			if (val === this.user_input) {
				return;
			}

			this.set("user_input", val);
		}
	}
});