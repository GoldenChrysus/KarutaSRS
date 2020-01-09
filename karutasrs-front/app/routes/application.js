import Route from '@ember/routing/route';
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";
import { inject as service } from "@ember/service";

export default Route.extend(ApplicationRouteMixin, {
	session   : service("session"),
	prefilter : service("ajax-prefilter"),
	user      : service("current-user"),
	router    : service("router"),
	metrics   : service("metrics"),

	init() {
		this._super(...arguments);

		this.router.on("routeDidChange", (transition) => {
			const page  = this.router.currentURL;
			const title = this.router.currentRouteName || "unknown";

			this.metrics.trackPage({ page, title });

			if (!transition.from) {
				return;
			}

			let latest_hour = this.getLatestHour();

			if (transition.from.name === "authenticated.reviews.queue" || latest_hour > +localStorage.getItem("latest_user_refresh")) {
				localStorage.setItem("latest_user_refresh", latest_hour);
				this.refresh();
			}
		});

		$(document).ajaxError((e, xhr) => {
			this.send("error", xhr);
		});
	},

	getLatestHour() {
		// Get time in seconds
		let time = (new Date()).getTime() / 1000;

		// Convert seconds to hours, then round down (floor) to latest hour
		return Math.floor(time / 60 / 60);
	},

	sessionAuthenticated() {
		this._super(...arguments);
		this.refresh();
	},

	async model() {
		this.prefilter.injectBearer();

		let user = await this.user.getUser();

		return {
			user    : user,
			session : this.session
		};
	},

	actions : {
		error(e) {
			let json = e.responseJSON;

			if (json && json.errors) {
				let error = json.errors[0];

				if (typeof error === "object" && error !== null) {
					switch (error.code) {
						// Item can't be reviewed
						case 12001:
							$(document)
								.find("#unreviewable-modal")
								.modal({
									closable : false
								})
								.modal("show");
							setTimeout(() => window.location.reload(), 5000);
							return;
					}
				}
			}

			switch (e.message) {
				case "Network request failed":
					document.write("The server is either undergoing maintenance or we broke it.");

					return;
			}
		}
	}
});
