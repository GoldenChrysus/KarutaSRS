import Model from '@ember-data/model';
import { attr, hasMany } from "@ember-data/model";
import config from "../config/environment";

export default class UserModel extends Model {
	@attr email;
	@attr password;
	@attr bearer;
	@attr lesson_queue_length;
	@attr review_queue_length;

	@hasMany("learned-item") learned_items;
	@hasMany("poem-note") poem_notes;

	get lesson_queue() {
		return (async () => {
			return await $.get({
				url : `${config.API_HOST}/users/${this.id}/lesson-queue`
			});
		})();
	}

	get review_queue() {
		return (async () => {
			return await $.get({
				url : `${config.API_HOST}/users/${this.id}/review-queue`
			});
		})();
	}

	get dashboard_stats() {
		return (async () => {
			return await $.get({
				url : `${config.API_HOST}/users/${this.id}/stats?type=dashboard`
			});
		})();
	}

	get review_stats() {
		return (async () => {
			return await $.get({
				url : `${config.API_HOST}/users/${this.id}/stats?type=review`
			});
		})();
	}
}
