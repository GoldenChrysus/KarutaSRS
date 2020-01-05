import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | authenticated/guide', function(hooks) {
	setupTest(hooks);

	test('it exists', function(assert) {
		let route = this.owner.lookup('route:authenticated/guide');
		assert.ok(route);
	});
});
