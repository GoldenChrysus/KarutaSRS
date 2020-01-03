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
		return this.args.kimariji_length;
	}

	set kimariji_length(kimariji_length) {
		this.onChange({ ...this.filters, kimariji_length: Number(kimariji_length) });
	}

	get verse2_length() {
		return this.args.verse2_length;
	}

	set verse2_length(verse2_length) {
		this.onChange({ ...this.filters, verse2_length: Number(verse2_length) })
	}

	get filters() {
		return { sort: this.sort, kimariji_length: this.kimariji_length, verse2_length: this.verse2_length };
	}

	@action onChange(filters) {
		this.args.onChange && this.args.onChange(filters);
	}

	@action
	didInsert(element) {
		$(element)
			.find('.ui.dropdown')
			.dropdown();
	}
}
