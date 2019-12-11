import Service from '@ember/service';
import { inject as service } from "@ember/service";

export default class AJAXPrefilter extends Service {
	@service session;

	injectBearer() {
		if (!this.session.isAuthenticated) {
			return;
		}

		let bearer    = this.session.data.authenticated.user.bearer;
		let prefilter = (options, originalOptions, jqXHR) => {
			return jqXHR.setRequestHeader("Authorization", `Bearer ${bearer}`);
		};

		$.ajaxPrefilter(prefilter);
	}
}
