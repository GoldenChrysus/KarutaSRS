import Route from '@ember/routing/route';

export default class AuthenticatedReviewRoute extends Route {
	model(params) {
		console.log(params);
	}
}
