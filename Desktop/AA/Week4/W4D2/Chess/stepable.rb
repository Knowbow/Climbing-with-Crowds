module Stepable
    def knight 
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
    def king 
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

    def pawn
        valid_move = []
        valid_move << [0,1]
        valid_move << [1,1]
        valid_move << [-1, 1]

        valid_move
    end
end