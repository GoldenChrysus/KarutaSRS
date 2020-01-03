import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PoemFiltersComponent extends Component {
	get sort() {
		return this.args.sort
	}

	set sort(sort) {
		this.args.onChange && this.args.onChange({ sort })
	}

	@action
	didInsert(element) {
		$(element)
			.find('.ui.dropdown')
			.dropdown();
	}
}
