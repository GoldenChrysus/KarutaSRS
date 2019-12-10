import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class MenusMenuLinksComponent extends Component {
	top         = this.args.top;
	openSidebar = this.args.openSidebar;
}
