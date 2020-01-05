import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | menus/top-menu', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<Menus::TopMenu />`);

		assert.equal(this.element.textContent.trim().slice(0, 3), 'かるた');

		// Template block usage:
		await render(hbs`
      <Menus::TopMenu>
        template block text
      </Menus::TopMenu>
    `);

		assert.equal(this.element.textContent.trim().slice(0, 3), 'かるた');
	});
});
