import Component from "@ember/component";

export default Component.extend({
	current_set : null,
	state       : "countdown",
	countdown   : 3,
	interval    : null,
	time        : 0,
	width       : "24%",
	size        : "quiz",

	didReceiveAttrs() {
		this._super(...arguments);

		let large_screen = (window.innerWidth >= 1200);

		this.set("width", (large_screen) ? "12%" : "24%");
		this.set("size", (large_screen) ? "quiz quiz-small" : "quiz");
		this.set("countdown", 3);
		this.set("state", "countdown");

		this.interval = setInterval(
			() => {
				if (this.countdown === 1) {
					clearInterval(this.interval);
					this.set("state", "quiz");
				}

				this.set("countdown", this.countdown - 1);
			},
			1000
		);
	},

	didRender() {
		let audio = $(this.element).find("audio")[0];

		if (audio) {
			audio.load();
			audio.play();

			this.time = (new Date()).getTime();
		}
	},

	actions : {
		answer(selected_poem_id) {
			this.time = (new Date()).getTime() - this.time;

			this.answer(+selected_poem_id, this.time);
		}
	}
});
