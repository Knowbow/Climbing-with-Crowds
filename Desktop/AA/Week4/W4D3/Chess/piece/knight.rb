require_relative "piece"
require_relative "stepable"
class Knight < Piece

    include Stepable
    def symbol
        '♞'.colorize(color)
    end

    def move_diffs
        valid_move=[] 
        valid_move << [1, 2]
        valid_move << [2, 1]
        valid_move << [-1, 2]
        valid_move << [-2, 1]
        valid_move << [-1, -2]
        valid_move << [-2, -1]
        valid_move << [1, -2]
        valid_move << [2, -1]
        valid_move
    end
    
end 