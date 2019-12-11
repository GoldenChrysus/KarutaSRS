module ApiErrors
	class AuthenticationError < ApiErrors::BaseError
		class LoginFailed < ApiErrors::AuthenticationError
			def initialize
				@title  = "Login failed"
				@detail = "The email or password was incorrect"
				@code   = 403
			end
		end
	end
end