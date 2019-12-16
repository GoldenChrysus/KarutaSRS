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

		def status
			return @status
		end

		def data
			return {
				:title  => self.title,
				:detail => self.detail,
				:code   => self.code,
				:status => self.status
			}
		end

		def initialize(title, detail, code, status)
			@title  = title
			@detail = detail
			@code   = code
			@status = status
		end
	end
end