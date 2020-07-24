require_relative 'piece'
require_relative 'stepable'

class King < Piece
    include Stepable

    def symbol
        '♚'.colorize(color)
    end

    def move_diffs
        
        valid_move=[] 
        valid_move << [0 ,1]
        valid_move << [1, 1]
        valid_move << [1, 0]
        valid_move << [1, -1]
        valid_move << [0, -1]
        valid_move << [-1, -1]
        valid_move << [-1, 0]
        valid_move << [-1, 1]
        valid_move
    end
    
end
