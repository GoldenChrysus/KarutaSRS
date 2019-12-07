import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class GrabberCardCharacterComponent extends Component {
	@tracked char = this.args.char || "&nbsp;";
}
