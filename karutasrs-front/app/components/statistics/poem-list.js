import Component from '@ember/component';

export default Component.extend({
	tagName    : "table",
	classNames : [
		"ui",
		"unstackable",
		"table"
	],
	poems      : [],
	title      : ""
});
