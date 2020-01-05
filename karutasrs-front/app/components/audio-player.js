import Component from '@ember/component';

export default Component.extend({
	tagName           : "audio",
	attributeBindings : [
		"controls",
		"volume",
		"controlslist"
	],
	controlslist : "nodownload",
	autoplay     : false,
	controls     : true,

	init() {
		this._super(...arguments);

		let volume = localStorage.getItem("default-volume") || 0.50;

		this.set("volume", volume);
	},

	didInsertElement() {
		if (this.autoplay) {
			this.element.play();
		}

		$(this.element).on("volumechange", function() {
			let new_volume = this.volume;

			localStorage.setItem("default-volume", new_volume);

			$(document)
				.find("audio")
				.each(function() {
					this.volume = new_volume;
				});
		});
	}
});
