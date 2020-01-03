import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sortBy } from '../common/util';

export default class FilteredPoemGridComponent extends Component {
	@tracked sort = 'num';
	@tracked kimariji_length;
	@tracked verse2_length;

	get poems() {
		let poems = this.args.poems.toArray();
		if (this.kimariji_length)
			poems = poems.filter(p => [...p.kimariji].length === this.kimariji_length);
		if (this.verse2_length)
		  poems = poems.filter(p => [...p.second_verse_answer].length === this.verse2_length);
		return poems.sort(
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
	onChange({ sort, kimariji_length, verse2_length }) {
		this.sort = sort;
		this.kimariji_length = kimariji_length;
		this.verse2_length = verse2_length;
	}
}
