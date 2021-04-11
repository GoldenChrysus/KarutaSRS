import Component from "@ember/component";

export default Component.extend({
	number : Math.floor(Math.random() * 100),

	actions : {
		onDragStart() {
			window.board_dragging_card = this.number;
		}
	}
});