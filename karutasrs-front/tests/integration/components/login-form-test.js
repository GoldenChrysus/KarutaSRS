import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | login-form', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<LoginForm />`);

		assert.equal(this.element.textContent.trim().slice(0, 5), 'Login');

		// Template block usage:
		await render(hbs`
      <LoginForm>
        template block text
      </LoginForm>
    `);

		assert.equal(this.element.textContent.trim().slice(0, 5), 'Login');
	});
});
