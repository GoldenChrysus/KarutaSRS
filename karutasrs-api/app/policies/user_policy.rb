class UserPolicy
	def initialize(user, params)
		@user   = user
		@params = params
	end

	def show?
		return (@params[:id] == String(@user.id))
	end

	def destroy?
		return false
	end

	def show_relationship?
		return (@params[:user_id] == String(@user.id))
	end
end