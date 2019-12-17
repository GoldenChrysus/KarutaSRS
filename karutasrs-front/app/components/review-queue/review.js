import Component from '@ember/component';
import { action, computed } from "@ember/object";
import { bind as bindWanaKana, isKana } from "wanakana"
import { inject as service } from "@ember/service";

export default Component.extend({
	poem_serv    : service("poem"),
	validate     : false,
	type         : "",
	item_id      : 0,
	poem         : {},
	user_input   : "",
	is_correct   : false,
	answered     : false,
	resetting    : true,
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
	first_verse   : computed("poem", function() {
		return this.poem_serv.formatFirstVerse(this.poem.first_verse);
	}),

	didRender() {
		if (this.resetting) {
			this.resetting = false;

			bindWanaKana(
				this.input_element,
				{
					IMEMode         : "toHiragana",
					useObsoleteKana : true
				}
			);
			this.focusInput();

			this.start_time = (new Date()).getTime();

			let audio = $(this.element).find("audio")[0];

			if (audio) {
				audio.load();

				if (this.type === "grabber") {
					audio.play();
				}
			}
		}

		$(this.element).find(".accordion")
			.accordion({
				onClosing : function() {
					this.find("audio")[0].pause();
				}
			});
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

		this.time_elapsed = (new Date()).getTime() - this.start_time;

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
		this.completeReview();

		$(document).on("keypress", (e) => {
			if (e.keyCode === 13) {
				return this.triggerNextReview();
			}
		});
	},

	resetComponent() {
		this.set("validate", false);
		this.set("user_input", "");
		this.set("is_correct", false);
		this.set("answered", false);
		$(this.input_element)
			.attr("disabled", false)
			.val("");

		this.resetting = true;
	},

	completeReview() {
		this.onComplete(this.is_correct, this.time_elapsed);
	},

	triggerNextReview() {
		$(document).off("keypress");
		this.resetComponent();
		this.toNext();
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

			let last_index       = val.length - 1;
			let last_char        = val[last_index];
			let answer_last_char = (this.type === "grabber") ? this.poem.second_verse_card[last_index] : this.poem.kimariji[last_index];

			if ((last_char === "え" && answer_last_char === "ゑ") || (last_char === "い" && answer_last_char === "ゐ")) {
				val = val.substring(0, last_index) + answer_last_char;

				$(this.input_element).val(val);
			}

			this.set("user_input", val);
		},

		triggerNextReview() {
			this.triggerNextReview();
		}
	}
});