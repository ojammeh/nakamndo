# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160904045719) do

  create_table "departments", force: :cascade do |t|
    t.string   "department_name", limit: 255
    t.integer  "intercom_number", limit: 4
    t.integer  "external_number", limit: 4
    t.text     "description",     limit: 65535
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "staff_details", force: :cascade do |t|
    t.integer  "staff_number",      limit: 4
    t.string   "first_name",        limit: 255
    t.string   "last_name",         limit: 255
    t.string   "gender",            limit: 255
    t.integer  "contact_number",    limit: 4
    t.string   "current_position",  limit: 255
    t.integer  "office_number",     limit: 4
    t.integer  "office_ext_number", limit: 4
    t.integer  "department_id",     limit: 4
    t.integer  "employment_status", limit: 4
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "visitor_details", force: :cascade do |t|
    t.integer  "visitor_type_id", limit: 4
    t.string   "first_name",      limit: 255
    t.string   "last_name",       limit: 255
    t.string   "gender",          limit: 255
    t.string   "representing",    limit: 255
    t.integer  "contact_number",  limit: 4
    t.datetime "date_added"
    t.string   "in_number",       limit: 255
    t.string   "type_of_id",      limit: 255
    t.text     "address",         limit: 65535
    t.string   "visitor_status",  limit: 255
    t.integer  "added_by",        limit: 4
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "visitor_histories", force: :cascade do |t|
    t.integer  "visitor_id",           limit: 4
    t.integer  "staff_visited",        limit: 4
    t.datetime "visit_date_time"
    t.string   "reason_for_visit",     limit: 255
    t.integer  "current_visit_status", limit: 4
    t.text     "staff_complaint",      limit: 65535
    t.integer  "added_by",             limit: 4
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "visitor_types", force: :cascade do |t|
    t.string   "visitor_type_name", limit: 255
    t.text     "description",       limit: 65535
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

end
