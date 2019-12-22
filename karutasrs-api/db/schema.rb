# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_22_004106) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "learned_items", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "poem_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "level", null: false
    t.datetime "next_review", null: false
    t.index ["poem_id"], name: "index_learned_items_on_poem_id"
    t.index ["user_id", "poem_id"], name: "index_learned_items_on_user_id_and_poem_id", unique: true
    t.index ["user_id"], name: "index_learned_items_on_user_id"
  end

  create_table "poems", force: :cascade do |t|
    t.string "name", null: false
    t.string "first_verse", null: false
    t.string "second_verse_raw", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "second_verse_card", null: false
    t.string "kimariji", null: false
    t.string "second_verse_answer", null: false
    t.string "translation", null: false
    t.string "background", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "learned_item_id", null: false
    t.integer "wrong_total"
    t.integer "wrong_kimariji"
    t.integer "wrong_second_verse_answer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "average_correct_time", default: 0, null: false
    t.integer "average_total_time", default: 0, null: false
    t.index ["learned_item_id"], name: "index_reviews_on_learned_item_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "bearer", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "learned_items", "poems"
  add_foreign_key "learned_items", "users"
  add_foreign_key "reviews", "learned_items"
end
