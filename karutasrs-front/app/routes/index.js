import Route from "@ember/routing/route";
import UnauthenticatedRouteMixin from "ember-simple-auth/mixins/unauthenticated-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(UnauthenticatedRouteMixin, {
	async model() {
		let poems = await this.store.query(
			"poem",
			{
				filter : {
					id : [
						5,
						10,
						16,
						17
					]
				}
			}
		);

		poems = poems.toArray();

		return {
			poems       : [poems[3], poems[0]],
			grabber_one : poems[1],
			grabber_two : poems[2],
			audio_poem  : 17
		}
	}
});