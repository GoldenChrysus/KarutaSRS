module ApiErrors
	class AuthenticationError < ApiErrors::BaseError
		class Unauthorized < ApiErrors::AuthenticationError
			def initialize
				@title  = "Unauthorized"
				@detail = "Not authorized to view this resource"
				@code   = 401
			end
		end
	end
end