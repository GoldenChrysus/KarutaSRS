import Component from "@ember/component";

export default Component.extend({
	set : null,

	didRender() {
		let audio = $(this.element).find("audio")[0];

		audio.load();
		audio.play();
	},

	actions : {
		answer(selected_poem_id) {
			this.answer(+selected_poem_id);
		}
	}
});
