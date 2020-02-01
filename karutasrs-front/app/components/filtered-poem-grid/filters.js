import Component from '@glimmer/component';
import { action } from '@ember/object';
import { bind as bindWanaKana, isKana } from "wanakana"

export default class FilteredPoemGridFiltersComponent extends Component {
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

	get kimariji() {
		return this._kimariji;
	}

	set kimariji(kimariji) {
		if (this.kimariji === kimariji) {
			return;
		}

		this._kimariji = kimariji;

		if (!kimariji || isKana(kimariji)) {
			this.onChange({ ...this.filters, kimariji });
		}
	}

	get second_verse() {
		return this._second_verse;
	}

	set second_verse(second_verse) {
		if (this.second_verse === second_verse) {
			return;
		}

		this._second_verse = second_verse;

		if (!second_verse || isKana(second_verse)) {
			this.onChange({ ...this.filters, second_verse });
		}
	}

	get learned() {
		return this.args.learned;
	}

	set learned(learned) {
		this.onChange({ ...this.filters, learned });
	}

	get filters() {
		return {
			sort                       : this.sort,
			kimariji_length            : this.kimariji_length,
			second_verse_answer_length : this.second_verse_answer_length,
			kimariji                   : this.kimariji,
			second_verse               : this.second_verse,
			learned                    : this.learned
		};
	}

	@action
	onChange(filters) {
		this.args.onChange && this.args.onChange(filters);
	}

	@action
	didInsert(element) {
		$(element)
			.find(".ui.dropdown")
			.dropdown();
		$(element)
			.accordion();
		bindWanaKana(
			$(element).find("[name=kimariji")[0],
			{
				IMEMode         : "toHiragana",
				useObsoleteKana : true
			}
		);
		bindWanaKana(
			$(element).find("[name=second_verse")[0],
			{
				IMEMode         : "toHiragana",
				useObsoleteKana : true
			}
		);
	}
}
