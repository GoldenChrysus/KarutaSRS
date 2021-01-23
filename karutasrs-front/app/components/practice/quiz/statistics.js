import Component from "@ember/component";

export default Component.extend({
	didReceiveAttrs() {
		this._super(...arguments);

		let correct = this.quiz_length - this.incorrect.length;

		this.set("correct_percent", ((correct / this.quiz_length) * 100).toFixed(0) + "%");
		this.set(
			"average_correct_time",
			(
				(correct) ? (this.timings.correct / correct) / 1000 : 0
			).toFixed("2") + " s"
		);
		this.set("average_total_time", (((this.timings.correct + this.timings.incorrect) / this.quiz_length) / 1000).toFixed("2") + " s");
	},

	actions : {
		restart() {
			this.restart();
		}
	}
});
