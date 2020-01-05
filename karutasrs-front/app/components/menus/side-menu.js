import Component from '@ember/component';

export default Component.extend({
	user : undefined,

	init() {
		this.user = this.user || {};

		this._super(...arguments);
	}
});
