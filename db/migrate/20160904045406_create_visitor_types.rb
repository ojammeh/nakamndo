class CreateVisitorTypes < ActiveRecord::Migration
  def change
    create_table :visitor_types do |t|
      t.string :visitor_type_name
      t.text :description

      t.timestamps null: false
    end
  end
end
