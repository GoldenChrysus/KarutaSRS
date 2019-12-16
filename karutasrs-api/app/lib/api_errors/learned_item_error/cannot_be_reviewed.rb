module ApiErrors
	class LearnedItemError < ApiErrors::BaseError
		class CannotBeReviewed < ApiErrors::LearnedItemError
			def initialize
				@title  = "Cannot be reviewed"
				@detail = "This item cannot be reviewed yet"
				@code   = 409
			end
		end
	end
end