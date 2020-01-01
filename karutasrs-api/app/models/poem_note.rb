class PoemNote < ApplicationRecord
	# Validation
	validates :note
	validates :user, presence: true
	validates :poem, presence: true

	# Relationships
	belongs_to :user, required: true
	belongs_to :poem, required: true
end
