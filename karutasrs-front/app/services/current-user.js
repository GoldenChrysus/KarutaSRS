import Service from '@ember/service';
import { inject as service } from "@ember/service";

export default class CurrentUserService extends Service {
	@service session;
	@service store;

	async getUser() {
		if (!this.session.isAuthenticated) {
			return {};
		}

		let id = this.session.data.authenticated.user.id;

		return await this.store.findRecord(
			"user",
			id,
			{
				backgroundReload : false
			}
		);
	}

	peekUser() {
		if (!this.session.isAuthenticated) {
			return {};
		}

		let id   = this.session.data.authenticated.user.id;
		let user = this.store.peekRecord("user", id);

		return user || {};
	}
}
