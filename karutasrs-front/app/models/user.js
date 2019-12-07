import Model from '@ember-data/model';
import { attr, hasMany } from "@ember-data/model";
import config from "../config/environment";

export default class UserModel extends Model {
	@attr email;
	@attr password;
	@attr bearer;

	@hasMany("learned-item") learned_items;

	get lesson_queue() {
		return (async () => {
			return await $.get({
				url : `${config.api_host}/users/${this.id}/lesson-queue`
			});
		})();
	}

	get review_queue() {
		return (async () => {
			return await $.get({
				url : `${config.api_host}/users/${this.id}/review-queue`
			});
		})();
	}
}
