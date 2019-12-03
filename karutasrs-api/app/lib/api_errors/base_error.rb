module ApiErrors
	class BaseError < StandardError
		def title
			return @title
		end

		def detail
			return @detail
		end

		def code
			return @code
		end

		def data
			return {
				:title  => self.title,
				:detail => self.detail,
				:code   => self.code,
				:status => self.code
			}
		end

		def initialize(title, detail, code)
			@title  = title
			@detail = detail
			@code   = code
		end
	end
end