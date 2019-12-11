import Route from '@ember/routing/route';

export default class AuthenticatedPoemsShowRoute extends Route {
	async model(params) {
		let poem = await this.store.findRecord("poem", params["id"]);

		return {
			poem : poem
		}
	}
}
