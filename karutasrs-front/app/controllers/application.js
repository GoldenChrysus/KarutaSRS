import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ApplicationController extends Controller {
	@service current_user;

	@tracked user = {};

	@action
	async loadData() {
		let user = await this.current_user.getUser();

		this.set("user", user);
	}
}
