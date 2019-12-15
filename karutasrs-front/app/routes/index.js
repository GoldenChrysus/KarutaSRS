import Route from "@ember/routing/route";
import UnauthenticatedRouteMixin from "ember-simple-auth/mixins/unauthenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(UnauthenticatedRouteMixin, {
	async model() {
		let poems = await this.store.findAll("poem");

		poems = poems.toArray();

		return {
			poems       : [poems[16], poems[4]],
			grabber_one : poems[9],
			grabber_two : poems[15],
			audio_poem  : 17
		}
	}
});