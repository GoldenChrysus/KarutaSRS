import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | authenticated/poem/show', function(hooks) {
	setupTest(hooks);

	test('it exists', function(assert) {
		let route = this.owner.lookup('route:authenticated/poem/show');
		assert.ok(route);
	});
});
