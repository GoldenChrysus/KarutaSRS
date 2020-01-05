import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PoemFiltersComponent extends Component {
	get sort() {
		return this.args.sort;
	}

	set sort(sort) {
		this.onChange({ ...this.filters, sort });
	}

	get kimariji_length() {
		return this.args.kimariji_length && Number(this.args.kimariji_length);
	}

	set kimariji_length(kimariji_length) {
		this.onChange({ ...this.filters, kimariji_length : Number(kimariji_length) });
	}

	get second_verse_answer_length() {
		return this.args.second_verse_answer_length && Number(this.args.second_verse_answer_length);
	}

	set second_verse_answer_length(second_verse_answer_length) {
		this.onChange({ ...this.filters, second_verse_answer_length : Number(second_verse_answer_length) })
	}

	get filters() {
		return { sort : this.sort, kimariji_length : this.kimariji_length, second_verse_answer_length : this.second_verse_answer_length };
	}

	@action
	onChange(filters) {
		this.args.onChange && this.args.onChange(filters);
	}

	@action
	didInsert(element) {
		$(element)
			.find('.ui.dropdown')
			.dropdown();
		$(element)
			.accordion();
	}
}
