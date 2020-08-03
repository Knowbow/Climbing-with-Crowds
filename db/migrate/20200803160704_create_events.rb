class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :location_id, null:false
      t.integer :host_id,  null:false
      t.integer :participant_id,  null:false
      t.string :date,  null:false
      t.string :time,  null:false

      t.timestamps
    end
    add_index :events, :location_id
    add_index :events, :host_id 
    add_index :events, :participant_id
  end
end
