module Stepable
    # attr_reader :board
    
    # def moves
    #     # create array to collect moves
    #     # iterate through each of the piece's possible move_diffs
    #     # for each move_diff, increment the piece's position to generate a new position
    #     # add the new position to the moves array if it is:
    #     # on the board and empty
    #     # OR on the board and contains a piece of the opposite color

    #     # return the final array of moves

    #     possible_moves = []
    #     move_diffs.each do |move|
    #         x,y = move
    #         if (self.empty? == true && board.valid_pos?([pos[0]+x], [pos[1]+y]]) || (board.valid_pos?([pos[0]+x, [pos[1]+y]) && self.color != self[pos[0]+x, pos[1]+y].color)
    #             possible_moves << move    
    #         end
    #     end
    # end

    # private

    # def move_diffs
    #     raise NotImplementedError
    # end
    
    # # def knight 
    # #     valid_move=[] 
    # #     valid_move << [1, 2]
    # #     valid_move << [2, 1]
    # #     valid_move << [-1, 2]
    # #     valid_move << [-2, 1]
    # #     valid_move << [-1, -2]
    # #     valid_move << [-2, -1]
    # #     valid_move << [1, -2]
    # #     valid_move << [2, -1]

    # #     valid_move
    # # end
    # # def king 
    # #     valid_move=[] 
    # #     valid_move << [0 ,1]
    # #     valid_move << [1, 1]
    # #     valid_move << [1, 0]
    # #     valid_move << [1, -1]
    # #     valid_move << [0, -1]
    # #     valid_move << [-1, -1]
    # #     valid_move << [-1, 0]
    # #     valid_move << [-1, 1]

    # #     valid_move
    # # end


    # # def pawn
    # #     valid_move = []
    # #     valid_move << [0,1]
    # #     valid_move << [1,1]
    # #     valid_move << [-1, 1]

    # #     valid_move
    # # end
end