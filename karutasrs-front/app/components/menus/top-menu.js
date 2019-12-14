import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default Component.extend({
	elementId  : "top-menu",
	classNames : [
		"ui",
		"secondary",
		"icon",
		"menu"
	],
	user       : {},
	actions    : {
		openSidebar() {
			$(document).find("body > .sidebar").sidebar("toggle");
		}
	}
})
