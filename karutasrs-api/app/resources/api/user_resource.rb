module Api
	class UserResource < JSONAPI::Resource
		attributes :email

		has_many :learned_item

		filters :email

		# Attribute controls
		def self.updatable_fields(context)
			# Bearer may never be updated
			# super - [:bearer]
			super
		end
	end
end