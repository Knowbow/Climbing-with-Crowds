class AnswerChoice < ApplicationRecord

    has_many :questions {
        primary_key: :id,
        foreign_key: :answer_choice_id,
        class_name: :Question
    }

end