import Component from '@ember/component';

export default Component.extend({
	tagName    : "table",
	classNames : [
		"ui",
		"unstackable",
		"table"
	],
	title : "",
	poems : undefined,

	init() {
		this.poems = this.poems || [];

		this._super(...arguments);
	}
});
