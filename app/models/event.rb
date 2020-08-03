class Event < ApplicationRecord
    validates :date, :time, :location_id, :participant_id, :host_id, presence: true

    belongs to :host, 
    foreign_key: :host_id,
    class_name: 'User'

    
end
