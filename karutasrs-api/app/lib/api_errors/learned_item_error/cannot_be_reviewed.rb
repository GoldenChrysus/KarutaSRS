module ApiErrors
	class LearnedItemError < ApiErrors::BaseError
		class CannotBeReviewed < ApiErrors::LearnedItemError
			def title
				"Cannot be reviewed"
			end

			def detail
				"This item cannot be reviewed yet"
			end

			def code
				406
			end
		end
	end
end