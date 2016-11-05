class CreateStaffDetails < ActiveRecord::Migration
  def change
    create_table :staff_details do |t|
      t.integer :staff_number
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.integer :contact_number
      t.string :current_position
      t.integer :office_number
      t.integer :office_ext_number
      t.integer :department_id
      t.integer :employment_status

      t.timestamps null: false
    end
  end
end
