import Component from '@glimmer/component';

export default class StatisticsComponent extends Component {
	type = this.args.type || "dashboard";
}
