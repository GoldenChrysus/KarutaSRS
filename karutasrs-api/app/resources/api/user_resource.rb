module Api
	class UserResource < JSONAPI::Resource
		attributes :email, :password, :bearer, :lesson_queue_length, :review_queue_length, :created_at

		has_many :learned_items
		has_many :poem_notes

		filters :email

		def fetchable_fields
			super - [:password]
		end

		# Attribute controls
		def self.updatable_fields(context)
			# Bearer may never be updated
			super - [:bearer]
		end
	end
end