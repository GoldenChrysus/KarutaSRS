import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sortBy } from '../common/util';

export default class FilteredPoemGridComponent extends Component {
	@tracked sort = "num";

	@tracked kimariji_length;
	@tracked second_verse_answer_length;

	get poems() {
		let poems = this.args.poems.toArray();

		if (this.kimariji_length) {
			poems = poems.filter(p => p.kimariji.length === this.kimariji_length);
		}

		if (this.second_verse_answer_length) {
		  poems = poems.filter(p => p.second_verse_answer.length === this.second_verse_answer_length);
		}

		return poems.sort(
			sortBy(
				p =>
					(this.sort === "kimariji")
						? p.kimariji.length
						: (this.sort === "second_verse")
							? p.second_verse_answer.length
							: 0,
				p => Number(p.id)
			)
		);
	}

	@action
	onChange({ sort, kimariji_length, second_verse_answer_length }) {
		setTimeout(() => {
			this.sort                       = sort;
			this.kimariji_length            = kimariji_length;
			this.second_verse_answer_length = second_verse_answer_length;
		}, 0);
	}
}
