class FormatJsonResult
	include Interactor

	def call
		data = {
			:data => context.data
		}

		context.result = data.to_json
	end
end