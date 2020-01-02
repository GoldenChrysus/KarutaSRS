class RemoveErrantPoemItems < ActiveRecord::Migration[6.0]
	def change
		execute(
			"DELETE FROM
				reviews
			WHERE
				learned_item_id IN
					(
						SELECT
							id
						FROM
							learned_items
						WHERE
							poem_id IN (26, 39, 41, 43, 44, 45, 47, 60, 71, 78, 88, 95)
					);"
		)

		execute(
			"DELETE FROM
				learned_items
			WHERE
				poem_id IN (26, 39, 41, 43, 44, 45, 47, 60, 71, 78, 88, 95);"
		)
	end
end
