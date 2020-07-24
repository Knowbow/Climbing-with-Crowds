FactoryBot.define do
  factory :user do
    username { "MyString" }
    session_token { "MyString" }
    password_digest { "MyString" }
  end
end
