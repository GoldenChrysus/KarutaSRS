import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filtered-poem-grid/filters', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<FilteredPoemGrid::Filters />`);

		assert.equal(this.element.textContent.trim().slice(0, 7), 'Filters');

		// Template block usage:
		await render(hbs`
			<FilteredPoemGrid::Filters>
				template block text
			</FilteredPoemGrid::Filters>
		`);

		assert.equal(this.element.textContent.trim().slice(0, 7), 'Filters');
	});
});
