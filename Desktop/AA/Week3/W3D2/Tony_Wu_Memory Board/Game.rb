require_relative "Card"
require_relative "Board"

class Game
    def initialize()
        @board = Board.new()
        
    end

    def play()
        while !@board.won?
            @board.render
            puts "enter pos"
            a = gets.chomp.split.map(:&to_i)
        end
    end

    def make_guess(pos)
        x,y=pos
    end
end