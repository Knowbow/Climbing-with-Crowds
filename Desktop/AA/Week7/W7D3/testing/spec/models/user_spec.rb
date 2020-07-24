require 'rails_helper'

RSpec.describe User, type: :model do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
   # it { should have_many(:laughs) }

    describe "uniqueness" do
        # need to first create a user and save to test DB to compare with (use our factory!)
        # we can only test for uniqueness if we have an existing user in our DB
        before :each do
            create(:user) # :user references the user factory
        end

        it { should validate_uniqueness_of(:session_token) }
        it { should validate_uniqueness_of(:username) }
    end

    describe "is_password?" do
        let!(:user) { create(:user) } # let! creates a user instance and stores it in the variable `user` 
                                      # so we can later reference it in our `expect` statements
            # `let!` vs `let`: 
                # `let!` will immediately create and save the user in the test DB
                # w/o the `!`, the user isn't saved right away

        context "with a valid password" do
            it "should return true" do
                expect(user.is_password?("starwars")).to be(true)
            end
        end

        context "with an invalid password" do
            it "should return false" do
                expect(user.is_password?("startrek")).to be(false)
            end
        end
    end

    # describe "find_by_credentials" do
    #     expect(User.find_by_credentials("Tony", "TonyAa")).to be(false)
    # end 

end