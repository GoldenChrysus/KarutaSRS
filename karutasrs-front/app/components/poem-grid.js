import Component from '@glimmer/component';

export default class PoemGridComponent extends Component {
	get poems() {
		return this.args.poems || [];
	}

	get classes() {
		switch (this.poems.length) {
			case 2:
				return "eight wide widescreen eight wide large screen eight wide computer eight wide tablet sixteen wide mobile column";

			default:
				return "four wide widescreen four wide large screen eight wide computer eight wide tablet eight wide mobile column";
		}
	}
}
