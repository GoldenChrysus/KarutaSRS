import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sortBy } from '../common/util';

export default class FilteredPoemGridComponent extends Component {
	@tracked sort = 'num';

	get poems() {
		return this.args.poems.toArray().sort(
			sortBy(
				p =>
					this.sort === 'kimariji'
						? [...p.kimariji].length
						: this.sort === 'verse2'
						? [...p.second_verse_answer].length
						: 0,
				p => Number(p.id)
			)
		);
	}

	@action
	onChange({ sort }) {
		this.sort = sort;
	}
}
