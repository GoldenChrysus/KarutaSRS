import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sortBy } from '../common/util';

export default class FilteredPoemGridComponent extends Component {
	@tracked sort    = "num";
	@tracked learned = -1;

	@tracked kimariji_length;
	@tracked second_verse_answer_length;
	@tracked kimariji;
	@tracked second_verse;

	get poems() {
		if (!this.args.poems) {
			return [];
		}

		let poems = this.args.poems.toArray();

		if (this.kimariji_length) {
			poems = poems.filter(p => p.kimariji.length === this.kimariji_length);
		}

		if (this.second_verse_answer_length) {
			poems = poems.filter(p => p.second_verse_answer.length === this.second_verse_answer_length);
		}

		if (this.kimariji) {
			poems = poems.filter(p => p.kimariji.indexOf(this.kimariji) === 0);
		}

		if (this.second_verse) {
			poems = poems.filter(p => p.second_verse_answer.indexOf(this.second_verse) === 0);
		}

		if ([1, 0].includes(this.learned)) {
			let valid_poem_ids = (this.args.learned || []).map(r => r.poem.get("id"));
			let expected       = (this.learned === 1) ? true : false;

			poems = poems.filter(p => valid_poem_ids.includes(p.id) === expected);
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
	onChange({ sort, kimariji_length, second_verse_answer_length, kimariji, second_verse, learned }) {
		setTimeout(() => {
			this.sort                       = sort;
			this.kimariji_length            = kimariji_length;
			this.second_verse_answer_length = second_verse_answer_length;
			this.kimariji                   = kimariji;
			this.second_verse               = second_verse;
			this.learned                    = +learned;
		}, 0);
	}
}
