require_relative "Card"
require_relative "Game"
class Board
    def initialize()
        @grid = Array.new(3) {Array.new(3,Card.new(3))}
    end
    def print
        @grid.each do |row|
            puts row.split
    end
    def [](pos)
        x,y = pos
        @grid[x][y]

    end
    def []=(pos, card)
        x,y=pos
        @grid[x][y] = card
    end

    def populate()
        
    end

    def render()
        @grid.each do |row|
            puts row.join(" ")
        end
    end

    def won?

    end

    def reveal(pos)
        x,y=pos
        if !@grid[x][y].face
            @grid[x][y].reveal
            return @grid[x][y].value
        else
            return false
        end
    end

end