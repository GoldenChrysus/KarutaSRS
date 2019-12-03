module ApiErrors
	class BaseError < StandardError
		def data
			return {
				:title  => self.title,
				:detail => self.detail,
				:code   => self.code,
				:status => self.code
			}
		end
	end
end