/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(env) {
	return {
		clientAllowedKeys: [
			"API_HOST",
			"APP_NAME",
			"GOOGLE_ANALYTICS_ID"
		],
		fastbootAllowedKeys: [],
		failOnMissingKey: false,
		path: path.join(path.dirname(__dirname), `/config/.env-${env}`)
	}
};
