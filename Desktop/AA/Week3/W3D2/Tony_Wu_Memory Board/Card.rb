require_relative "Board"
require_relative "Game"
attr_accessor :value, :face

class Card
    def initialize(value)
        @value = value
        @face = false
    end
    def print
        if @face
            puts @value
            return true
        else
            return false
        end
    end

    def hide
        @face = false
    end
    def reveal
        @face = true
    end
    def to_s
        @value.to_s
    end
    def ==(value_comp)
        @value == value_comp
    end

end