class EditStuff < ActiveRecord::Migration[5.2]
  def change #This is for project 2 
    remove_column :users, :email
    rename_column :users, :name, :username
  end
  
end
