class Poem < ApplicationRecord
	@@current_user = nil

	# Validation
	validates :name, presence: true
	validates :first_verse, presence: true
	validates :second_verse_raw, presence: true
	validates :second_verse_card, presence: true
	validates :second_verse_answer, presence: true
	validates :kimariji, presence: true
	validates :translation, presence: true
	validates :background, presence: true

	# Relationships
	has_many :learned_items
	has_many :poem_notes

	def note
		if (!@@current_user)
			return nil
		end

		note = PoemNote.where(:user_id => @@current_user.id).first

		return (note) ? note.note : nil
	end

	def self.set_current_user(user)
		@@current_user = user
	end

	def self.update_or_create(objects)
		objects.each do |attributes|
			poem = self.find_or_initialize_by(id: attributes[:id])

			poem.assign_attributes(attributes)
			poem.save
		end
	end
end
