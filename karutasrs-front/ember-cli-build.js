'use strict';

const EmberApp   = require('ember-cli/lib/broccoli/ember-app');
const Funnel     = require("broccoli-funnel");
const MergeTrees = require("broccoli-merge-trees");

module.exports = function(defaults) {
	let app = new EmberApp(defaults, {
		yamlConfig  : {
			fileNames                 : ["config.yml"],
			warnAboutNonexistingFiles : true
		}
	});

	app.import("node_modules/fomantic-ui/dist/semantic.min.js");

	let semantic_css = Funnel(
		"fomantic/dist/themes",
		{
			destDir : "assets/themes",
			include : ["**"]
		}
	);

	// Use `app.import` to add additional libraries to the generated
	// output files.
	//
	// If you need to use different assets in different
	// environments, specify an object as the first parameter. That
	// object's keys should be the environment name and the values
	// should be the asset to use in that environment.
	//
	// If the library that you are including contains AMD or ES6
	// modules that you would like to import into your application
	// please specify an object with the list of modules as keys
	// along with the exports of each module as its value.

	return MergeTrees([app.toTree(), semantic_css]);
};
