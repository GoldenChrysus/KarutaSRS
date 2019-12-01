module Api
	class LearnedItemsController < ApplicationController
		def complete_review
			level_map     = {
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
			advance       = {}
			item_id       = params[:id]
			parsed_data   = JSON.parse(request.raw_post)
			wrong_answers = parsed_data["wrong_answers"]
			item          = LearnedItem.find(item_id)
			current_level = item.level
			new_level     = 1
			result        = {
				:errors  => Array.new,
				:success => false
			}

			if (wrong_answers === 0)
				new_level = current_level + 1
			elsif (current_level > 1)
				penalty    = (current_level >= 5) ? 2 : 1
				adjustment = ((wrong_answers / 2).to_f).ceil
				new_level  = [current_level - (adjustment * penalty), 1].max
			end

			if (level_map[new_level] === nil)
				result[:errors].push("This item cannot be reviewed.")
				render json: FormatJsonResult.call(data: result).result
				return
			end

			map_item = level_map[new_level].split(" ")

			advance[map_item[1].to_sym] = map_item[0].to_i

			next_review = Time.now.advance(advance).beginning_of_hour

			item.next_review = next_review
			item.level       = new_level

			begin
				item.save
				render json: FormatJsonResult.call(data: item).result
			rescue e
				result[:errors].push(e.message)
				render json: FormatJsonResult.call(data: result).result
			end
		end
	end
end