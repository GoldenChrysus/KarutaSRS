"use strict";

module.exports = function(environment) {
	let ENV = {
		modulePrefix: 'karutasrs-front',
		environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. EMBER_MODULE_UNIFICATION: true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			name      : process.env.APP_NAME,
			preloader : {
				loadedClass : "disappear",
				removeDelay : 250
			}
		},

		"ember-simple-auth" : {
			routeAfterAuthentication    : "authenticated.dashboard",
			routeIfAlreadyAuthenticated : "authenticated.dashboard"
		},

		metricsAdapters : [
			{
				name         : "GoogleAnalytics",
				environments : ["development", "production"],
				config       : {
					id: process.env.GOOGLE_ANALYTICS_ID,
					// Use `analytics_debug.js` in development
					debug: (environment === "development"),
					// Use verbose tracing of GA events
					trace: false,
					// Ensure development env hits aren"t sent to GA
					sendHitTask: (environment !== "development")
				}
			}
		]
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
		ENV.APP.autoboot = false;
	}

	if (environment === 'production') {
		// here you can enable a production-specific feature
	}

	return ENV;
};
