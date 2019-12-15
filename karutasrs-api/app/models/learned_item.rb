class LearnedItem < ApplicationRecord
	# Class constants
	LevelMap = {
		1 => "4 hours",
		2 => "8 hours",
		3 => "1 days",
		4 => "2 days",
		5 => "4 days",
		6 => "2 weeks",
		7 => "1 months",
		8 => "4 months",
		9 => "99 years"
	}

	# Validation
	validates :level, presence: true
	validates :next_review, presence: true
	validates :user, presence: true
	validates :poem, presence: true

	# Relationships
	belongs_to :user, required: true
	belongs_to :poem, required: true

	# Callbacks
	before_validation :set_initial_data, on: :create

	def complete_review(data)
		wrong_answers = data["wrong_answers"]
		current_level = self.level
		new_level     = 1

		if (current_level === 9 || Time.now < self.next_review)
			raise ApiErrors::LearnedItemError::CannotBeReviewed.new
		end

		if (wrong_answers === 0)
			new_level = current_level + 1
		elsif (current_level > 1)
			penalty    = (current_level >= 5) ? 2 : 1
			adjustment = ((wrong_answers / 2).to_f).ceil
			new_level  = [current_level - (adjustment * penalty), 1].max
		end

		self.level       = new_level
		self.next_review = get_next_review_date(new_level)

		self.save

		review_data = {
			:learned_item              => self,
			:wrong_total               => wrong_answers,
			:wrong_kimariji            => data["wrong_kimariji"],
			:wrong_second_verse_answer => data["wrong_grabber"],
			:average_correct_time      => data["avg_correct_time"].to_f.round,
			:average_total_time        => data["avg_total_time"].to_f.round
		}

		Review.create(review_data)
		return self
	end

	private
		def get_next_review_date(level)
			advance  = {}
			map_item = self.class::LevelMap[level].split(" ")

			advance[map_item[1].to_sym] = map_item[0].to_i

			return Time.now.advance(advance).beginning_of_hour
		end

		def set_initial_data
			self.level       = 1
			self.next_review = get_next_review_date(self.level)
		end
end
