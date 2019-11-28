# spec/support/request_spec_helper.rb
module RequestSpecHelper
	API_PATH = "/api"

	# Parse JSON response to ruby hash
	def json
		JSON.parse(response.body)
	end
end