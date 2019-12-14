import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import moment from "moment";

export default class StatisticsComponent extends Component {
	@service current_user;

	@tracked loading        = true;
	@tracked next_review    = "N/A";
	@tracked poems_by_level = {};
	@tracked poems_learned  = 0;
	@tracked poems_mastered = 0;
	@tracked best_poems     = [];
	@tracked worst_poems    = [];

	type = this.args.type || "dashboard";

	@action
	async didInsert() {
		let data = await this.current_user.peekUser()[`${this.type}_stats`];

		data = data.data;

		if (this.type === "dashboard") {
			this.processDashboardData(data);
		}
	}

	processDashboardData(data) {
		let poems_by_level = {
			1 : {
				value : 0,
				label : "One",
			},
			2 : {
				value : 0,
				label : "Two",
			},
			3 : {
				value : 0,
				label : "Three",
			},
			4 : {
				value : 0,
				label : "Four",
			},
			5 : {
				value : 0,
				label : "Five",
			},
			6 : {
				value : 0,
				label : "Six",
			},
			7 : {
				value : 0,
				label : "Seven",
			},
			8 : {
				value : 0,
				label : "Eight",
			},
			9 : {
				value : 0,
				label : "Nine"
			}
		};
		let total          = 0;
		let poems_mastered = 0;

		for (let record of data.poems_by_level) {
			total += record.count;

			poems_by_level[record.level].value = record.count;

			if (record.level === 9) {
				poems_mastered = record.count;
			}
		}

		this.next_review    = this.calculateNextReview(data.next_review);
		this.poems_learned  = total;
		this.poems_mastered = poems_mastered;
		this.poems_by_level = Object.values(poems_by_level);
		this.best_poems     = this.formatPoemPercents(data.best_poems);

		data.worst_poems.sort((a, b) => {
			return (a.success_percent === b.success_percent)
				? 0
				: ((a.success_percent < b.success_percent)
					? -1
					: 1);
		});

		this.worst_poems = this.formatPoemPercents(data.worst_poems);
		this.loading     = false;
	}

	formatPoemPercents(poems) {
		for (let i = 0; i < poems.length; i++) {
			poems[i].success_percent = (poems[i].success_percent * 100).toFixed(0) + "%";
		}

		return poems;
	}

	calculateNextReview(date) {
		if (!date) {
			return "N/A";
		}

		let review = moment.utc(date).local();
		let now    = moment();
		let time   = (now.isAfter(review)) ? "Now" : false;

		if (!time) {
			let diff = now.diff(review, "days");

			time = (diff === 0) ? review.format("h:ss a") : `${diff} days`;
		}

		return time;
	}
}
