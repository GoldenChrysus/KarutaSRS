import Component from '@ember/component';
import { tracked } from "@glimmer/tracking";

export default Component.extend({
	classNames        : [
		"ui",
		"centered",
		"grid",
		"lesson"
	],
	classNameBindings : [
		"slideRight"
	],

	slideRight : "",
	poem       : {}
});
