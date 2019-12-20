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
			// Here you can pass flags/options to your application instance
			// when it is created
		},

		"ember-simple-auth" : {
			routeAfterAuthentication    : "authenticated.dashboard",
			routeIfAlreadyAuthenticated : "authenticated.dashboard"
		},

		pace: {
			// addon-specific options to configure theme
			theme: 'loading-bar',
			color: 'silver',
			
			// pace-specific options
			// learn more on http://github.hubspot.com/pace/#configuration
			//           and https://github.com/HubSpot/pace/blob/master/pace.coffee#L1-L72
			catchupTime: 50,
			initialRate: .01,
			minTime: 100,
			ghostTime: 50,
			maxProgressPerFrame: 20,
			easeFactor: 1.25,
			startOnPageLoad: true,
			restartOnPushState: false,
			restartOnRequestAfter: false,
			target: 'body',
			elements: {
				checkInterval: 100,
				selectors: ['body', '.ember-view']
			},
			document: false,
			eventLag: false,
			ajax: false
		}
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
