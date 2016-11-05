class CreateVisitorHistories < ActiveRecord::Migration
  def change
    create_table :visitor_histories do |t|
      t.integer :visitor_id
      t.integer :staff_visited
      t.datetime :visit_date_time
      t.string :reason_for_visit
      t.integer :current_visit_status
      t.text :staff_complaint
      t.integer :added_by

      t.timestamps null: false
    end
  end
end
