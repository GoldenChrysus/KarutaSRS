import Route from '@ember/routing/route';

export default class AuthenticatedReviewRoute extends Route {
	async model(params) {
		return {
			poem : await this.store.findRecord("poem", 17)
		};
	}
}
