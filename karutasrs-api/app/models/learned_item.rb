class LearnedItem < ApplicationRecord
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

	validates :level, presence: true
	validates :next_review, presence: true
	validates :user, presence: true
	validates :poem, presence: true

	# Relationships
	belongs_to :user, required: true
	belongs_to :poem, required: true

	# Callbacks
	before_validation :set_initial_data, on: :create

	def complete_review(wrong_answers)
		advance       = {}
		item_id       = params[:id]
		parsed_data   = JSON.parse(request.raw_post)
		wrong_answers = parsed_data["wrong_answers"]
		item          = LearnedItem.find(item_id)
		current_level = self.level
		new_level     = 1
		return_data   = {
			:status => 200,
			:result => {
				:errors  => Array.new,
				:success => false
			}
		}

		if (current_level === 9 || Time.now < self.next_review)
			return_data[:status] = 406

			return_data[:result][:errors].push("This item cannot be reviewed.")
			return return_data
		end

		if (wrong_answers === 0)
			new_level = current_level + 1
		elsif (current_level > 1)
			penalty    = (current_level >= 5) ? 2 : 1
			adjustment = ((wrong_answers / 2).to_f).ceil
			new_level  = [current_level - (adjustment * penalty), 1].max
		end

		self.level       = new_level
		self.next_review = self.get_next_review_date(new_level)

		begin
			self.save
			
			return_data[:result] = self

			return_data[:result][:success] = true

			return return_data
		rescue StandardError => e
			return_data[:status] = 500

			return_data[:result][:errors].push(e.message)
			return return_data
		end
	end

	private
		def get_next_review_date(level)
			map_item = self::LevelMap[level].split(" ")

			advance[map_item[1].to_sym] = map_item[0].to_i

			return Time.now.advance(advance).beginning_of_hour
		end

		def set_initial_data
			self.level       = 1
			self.next_review = self.get_next_review_date(self.level)
		end
end
