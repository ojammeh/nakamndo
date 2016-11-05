class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
      t.string :department_name
      t.integer :intercom_number
      t.integer :external_number
      t.text :description

      t.timestamps null: false
    end
  end
end
