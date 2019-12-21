import Component from '@ember/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
	elementId  : "intro-modal",
	classNames : [
		"ui",
		"mini",
		"modal"
	],
	router     : service("router"),
	session    : service("session"),
	active     : false,

	didInsertElement() {
		$(this.element).find("a").on("click", () => $(this.element).modal("hide"));

		if (this.active) {
			this.showModal();
		}
	},

	didRender() {
		if (!this.active && this.router.currentRouteName === "authenticated.dashboard" && this.session.data.new_account) {
			this.session.set("data.new_account", false);

			this.set("active", true);
			this.showModal();
		}
	},

	showModal() {
		$(this.element).modal("show");
	}
});
