import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | authenticated/review', function(hooks) {
	setupTest(hooks);

	test('it exists', function(assert) {
		let route = this.owner.lookup('route:authenticated/review');
		assert.ok(route);
	});
});
