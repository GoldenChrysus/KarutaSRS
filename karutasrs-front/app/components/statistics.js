import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import moment from "moment";

export default class StatisticsComponent extends Component {
	@service current_user;

	@tracked loading = true;

	// Dashboard
	@tracked next_review    = "N/A";
	@tracked poems_by_level = {};
	@tracked poems_learned  = 0;
	@tracked poems_mastered = 0;
	@tracked best_poems     = [];
	@tracked worst_poems    = [];

	// Review
	@tracked total_reviews             = 0;
	@tracked kimariji_correct_rate     = "N/A";
	@tracked second_verse_correct_rate = "N/A";
	@tracked kimariji_performance      = [];
	@tracked second_verse_performance  = [];

	type = this.args.type || "dashboard";

	@action
	async didInsert() {
		let data = await this.current_user.peekUser()[`${this.type}_stats`];

		data = data.data;

		if (this.type === "review") {
			this.processReviewData(data);
		} else {
			this.processDashboardData(data);
		}

		this.loading = false;
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
	}

	processReviewData(data) {
		let performance = {
			kimariji     : {
				1 : {
					value : "N/A",
					label : "One",
				},
				2 : {
					value : "N/A",
					label : "Two",
				},
				3 : {
					value : "N/A",
					label : "Three",
				},
				4 : {
					value : "N/A",
					label : "Four",
				},
				5 : {
					value : "N/A",
					label : "Five",
				},
				6 : {
					value : "N/A",
					label : "Six",
				}
			},
			second_verse : {
				1 : {
					value : "N/A",
					label : "One",
				},
				2 : {
					value : "N/A",
					label : "Two",
				},
				3 : {
					value : "N/A",
					label : "Three",
				},
				4 : {
					value : "N/A",
					label : "Four",
				},
				5 : {
					value : "N/A",
					label : "Five",
				},
				7 : {
					value : "N/A",
					label : "Seven",
				},
				8 : {
					value : "N/A",
					label : "Eight",
				}
			}
		};

		for (let item_type of ["kimariji", "second_verse"]) {
			for (let record of data[`performance_by_${item_type}`]) {
				performance[item_type][record.length].value = this.formatPercent(record[`success_${item_type}_percent`]);
			}

			this[`${item_type}_performance`] = Object.values(performance[item_type]);
		}

		this.total_reviews             = data.total_reviews;
		this.kimariji_correct_rate     = (data.kimariji_correct_rate !== false) ? this.formatPercent(data.kimariji_correct_rate) : "N/A";
		this.second_verse_correct_rate = (data.second_verse_correct_rate !== false) ? this.formatPercent(data.second_verse_correct_rate) : "N/A";
	}

	formatPercent(number) {
		return (+number * 100).toFixed(0) + "%"
	}

	formatPoemPercents(poems) {
		for (let i = 0; i < poems.length; i++) {
			poems[i].success_percent = this.formatPercent(poems[i].success_percent);
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
