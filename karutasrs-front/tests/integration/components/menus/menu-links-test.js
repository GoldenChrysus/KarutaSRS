import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | menus/menu-links', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<Menus::MenuLinks @top={{true}}/>`);

		assert.equal(this.element.textContent.trim(), '');

		// Template block usage:
		await render(hbs`
      <Menus::MenuLinks @top={{true}}>
        template block text
      </Menus::MenuLinks>
    `);

		assert.equal(this.element.textContent.trim(), '');
	});
});
