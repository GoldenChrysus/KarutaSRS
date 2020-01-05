import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modals/intro-modal', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<Modals::IntroModal />`);

		assert.equal(this.element.textContent.trim().slice(0, 7), 'Welcome');

		// Template block usage:
		await render(hbs`
      <Modals::IntroModal>
        template block text
      </Modals::IntroModal>
    `);

		assert.equal(this.element.textContent.trim().slice(0, 7), 'Welcome');
	});
});
