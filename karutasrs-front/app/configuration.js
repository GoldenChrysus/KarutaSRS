import Configuration from "ember-simple-auth/configuration";

export default Configuration.extend({
	routeAfterAuthentication : "authenticated.dashboard"
});