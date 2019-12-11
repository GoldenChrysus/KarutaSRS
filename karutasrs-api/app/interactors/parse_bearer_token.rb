class ParseBearerToken
	include Interactor

	def call
		data          = context.data
		authorization = String(data["Authorization"])
		bearer        = authorization.split(" ")[1]

		context.bearer = bearer
	end
end