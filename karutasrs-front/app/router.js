import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function() {
	this.route("auth", {path : "/auth/:type"});
	this.route("authenticated", { path : "/" }, function() {
		// Index is not an authenticated route. However, having it at "/" and also having the authenticated routes at "/" causes issues with doing the authenticated redirects.
		// We could fix this by either not namespacing the authenticated routes or by nesting the index route here. The latter was chosen. This way, authenticated routes are clearly identifiable
		// as such in the code, e.g. "authenticated.dashboard" and we only have one special route (index) that is nested here as an unauthenticated route. It can be referenced in the code as "index".
		this.route("index", {path : "/", resetNamespace : true});

		this.route("dashboard");
		this.route("reviews", { path : "/reviews" }, function() {
			this.route("queue", { path : "/:type" });
		});
		this.route("lessons", { path : "/lessons" }, function() {
			this.route("queue");
		});
		this.route("practice", { path : "/practice" }, function() {
			this.route("quiz");
			this.route("layout");
		});
		this.route("poems", { path : "/poems" }, function() {
			this.route("show", { path : "/:id" });
		});
		this.route("guide");
	});
});
