class PoemNotePolicy
	def initialize(user, params)
		@user   = user
		@params = params
	end

	def index?
		if (!@params[:filter] || !@params[:filter][:user_id])
			return false
		end

		return (@params[:filter][:user_id] === @user.id.to_s)
	end

	def show?
		item = get_poem_note(@params[:id])
		user = item.user

		return (user.id == @user.id)
	end

	def destroy?
		return false
	end

	def show_relationship?
		item = get_poem_note(@params[:learned_item_id])
		user = item.user

		return (user.id == @user.id)
	end

	private
		def get_poem_note(id)
			return PoemNote.find(id)
		end
end