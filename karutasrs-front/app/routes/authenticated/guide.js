import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
	async model() {
		let queue = await this.store.query(
			"poem",
			{
				filter : {
					id : [
						18,
						22,
						37,
						4,
						5
					]
				}
			}
		);

		queue = queue.toArray();

		return {
			demo_queue : queue,
			first_poem : queue[0]
		}
	}
});
