class CreateVisitorDetails < ActiveRecord::Migration
  def change
    create_table :visitor_details do |t|
      t.integer :visitor_type_id
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :representing
      t.integer :contact_number
      t.datetime :date_added
      t.string :in_number
      t.string :type_of_id
      t.text :address
      t.string :visitor_status
      t.integer :added_by

      t.timestamps null: false
    end
  end
end
