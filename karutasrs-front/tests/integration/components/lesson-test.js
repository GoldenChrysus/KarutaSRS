import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | lesson', function(hooks) {
	setupRenderingTest(hooks);

	test('it throws an error when rendered without data', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });
		setupOnerror((err) => {
			assert.equal(err.message.slice(0, 7), "No poem");
		});

		await render(hbs`<Lesson />`);
	});
});
