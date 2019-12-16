# Internal coding for authentication errors is in the 100 range
module ApiErrors
	class AuthenticationError < ApiErrors::BaseError
	end
end