module Api
	class UserResource < JSONAPI::Resource
		attributes :email, :bearer, :lesson_queue_length, :review_queue_length

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