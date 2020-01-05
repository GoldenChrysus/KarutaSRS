import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | review-queue/review', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });
		let error = "";

		try {
			await render(hbs`<ReviewQueue::Review />`)
		} catch (e) {
			error = e.message;
		}
			
		assert.equal(error.slice(0, 7), "No poem");
	});
});
