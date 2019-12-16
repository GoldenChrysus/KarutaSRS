module ApiErrors
	class AuthenticationError < ApiErrors::BaseError
		class Unauthorized < ApiErrors::AuthenticationError
			def initialize
				@title  = "Unauthorized"
				@detail = "Not authorized to perform this action"
				@code   = 102
				@status = 401
			end
		end
	end
end