import Component from '@ember/component';
import { action } from "@ember/object";

export default Component.extend({
	lesson_one_poem      : null,
	lesson_two_poem      : null,
	lesson_one_index     : 0,
	lesson_two_index     : 1,
	current_lesson_index : 0,
	current_lesson_elem  : "lesson_one",
	queue                : [],
	multiple_lessons     : false,

	init() {
		this._super(...arguments);

		this.set("lesson_one_poem", this.queue[0]);
		this.set("lesson_two_poem", this.queue[1]);
		this.set("multiple_lessons", (this.queue.length > 0));
	},

	actions: {
		async changeLesson(index) {
			let new_lesson_elem  = (this.current_lesson_elem === "lesson_one") ? "lesson_two" : "lesson_one";
			let new_lesson_index = `${new_lesson_elem}_index`;
			let new_lesson_poem  = `${new_lesson_elem}_poem`;

			let $new_lesson_elem     = $(this[new_lesson_elem]);
			let $current_lesson_elem = $(this[this.current_lesson_elem]);

			if (index !== this[new_lesson_index]) {
				this.set(new_lesson_poem, this.queue[index]);
			}

			if (index > this.current_lesson_index) {
				if ($new_lesson_elem.hasClass("slide-left")) {
					$new_lesson_elem.addClass("bypass");

					$new_lesson_elem
						.removeClass("slide-left")
						.addClass("slide-right");

					$new_lesson_elem[0].offsetHeight; // Force DOM reflow to update the transforms without triggering transitions

					$new_lesson_elem.removeClass("bypass");
				}

				$current_lesson_elem.addClass("slide-left");
				$new_lesson_elem.removeClass("slide-right");
			} else {
				if ($new_lesson_elem.hasClass("slide-right")) {
					$new_lesson_elem.addClass("bypass");

					$new_lesson_elem
						.removeClass("slide-right")
						.addClass("slide-left");

					$new_lesson_elem[0].offsetHeight; // Force DOM reflow to update the transforms without triggering transitions

					$new_lesson_elem.removeClass("bypass");
				}

				$current_lesson_elem.addClass("slide-right");
				$new_lesson_elem.removeClass("slide-left");
			}

			this.current_lesson_elem  = new_lesson_elem;
			this.current_lesson_index = index;

			this[new_lesson_index] = index;
		}
	}
});
