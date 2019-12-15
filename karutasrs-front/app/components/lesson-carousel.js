import Component from '@ember/component';
import { action } from "@ember/object";

export default Component.extend({
	classNames           : ["lesson-carousel"],
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
		this.set("multiple_lessons", (this.queue.length > 1));
	},

	actions: {
		async changeLesson(index) {
			if (index === this.current_lesson_index) {
				return;
			}

			let new_lesson_elem  = (this.current_lesson_elem === "lesson_one") ? "lesson_two" : "lesson_one";
			let new_lesson_index = `${new_lesson_elem}_index`;
			let new_lesson_poem  = `${new_lesson_elem}_poem`;

			let $new_lesson_elem     = $(this[new_lesson_elem]);
			let $current_lesson_elem = $(this[this.current_lesson_elem]);

			if (index !== this[new_lesson_index]) {
				this.set(new_lesson_poem, this.queue[index]);
			}

			let new_slide = (index > this.current_lesson_index) ? "slide-left" : "slide-right";
			let old_slide = (index > this.current_lesson_index) ? "slide-right" : "slide-left";

			if ($new_lesson_elem.hasClass(new_slide)) {
				$new_lesson_elem.addClass("bypass");

				$new_lesson_elem
					.removeClass(new_slide)
					.addClass(old_slide);

				$new_lesson_elem[0].offsetHeight; // Force DOM reflow to update the transforms without triggering transitions

				$new_lesson_elem.removeClass("bypass");
			}

			$current_lesson_elem.addClass(new_slide);
			$new_lesson_elem.removeClass(old_slide);

			this.current_lesson_elem  = new_lesson_elem;
			this.current_lesson_index = index;

			this[new_lesson_index] = index;
		}
	}
});
