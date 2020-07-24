
require "Time"
require "Date"
class Cat < ApplicationRecord 
    
    validates :birth_date, presence: true
    validates :name, presence: true 
    validates :sex,  inclusion: { in: ['F', 'M'] }, presence: true
    validates :color, inclusion: { in: ['red', 'blue'] }, presence: true
    validates :description, presence: true

    def age(dob)
        now = Time.now.utc.to_date
        now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
    end

end