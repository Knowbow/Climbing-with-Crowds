class User < ApplicationRecord
    # validates :name, :email, presence: true # first project
    validates :username, presence: true, uniqueness: true # second project
end