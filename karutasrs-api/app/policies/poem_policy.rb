class PoemPolicy
	def initialize(user, params)
		@user   = user
		@params = params
	end

	def show?
		return true
	end

	def destroy?
		return false
	end

	def show_relationship?
		return false
	end
end