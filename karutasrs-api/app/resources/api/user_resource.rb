module Api
	class UserResource < JSONAPI::Resource
		attributes :email, :bearer

		has_many :learned_items

		filters :email

		# Attribute controls
		def self.updatable_fields(context)
			# Bearer may never be updated
			# super - [:bearer]
			super
		end
	end
end