# == Schema Information
#
# Table name: responses
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  question_id      :integer          not null
#  answer_choice_id :integer          not null
#
class Response < ApplicationRecord
    belongs_to {
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    }

    belongs_to {
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Question
    }

    belongs_to {
        primary_key: :id,
        foreign_key: :answer_choice_id,
        class_name: :AnswerChoice
    }
end
