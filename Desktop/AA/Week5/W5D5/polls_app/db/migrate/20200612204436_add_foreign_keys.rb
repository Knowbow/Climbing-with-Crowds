class AddForeignKeys < ActiveRecord::Migration[5.1]
  def change
    add_column :polls, :user_id, :integer, null: false
    add_column :questions, :poll_id, :integer, null: false
    add_column :answer_choices, :question_id, :integer, null: false
    add_column :answer_choices, :user_id, :integer, null: false
    drop_table (:questions_answer_choices)
  end
end
