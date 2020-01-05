import Component from '@ember/component';

export default Component.extend({
	elementId  : "top-menu",
	classNames : [
		"ui",
		"secondary",
		"icon",
		"menu"
	],
	user    : undefined,
	actions : {
		openSidebar() {
			$(document)
				.find("body > .sidebar")
				.sidebar("toggle");
		}
	},

	init() {
		this.user = this.user || {};

		this._super(...arguments);
	}
})
