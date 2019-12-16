module ApiErrors
	class AccessError < ApiErrors::BaseError
		class Forbidden < ApiErrors::AccessError
			def initialize
				@title  = "Forbidden"
				@detail = "This action is forbidden"
				@code   = 403
			end
		end
	end
end