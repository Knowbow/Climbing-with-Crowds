module Slideable

# # HORIZONTAL_DIRS stores an array of horizontal directions
#     # when a piece moves in a given direction, its row and/or its column should increment by some value
#     # ex: A piece starts at position [1, 2] and it moves horizontally to the right
#       # its position changes to [1,3]
#       # the row increases by 0 and the column increases by 1
#       HORIZONTAL_DIRS = [
#         [-1, 0], # left
#         [1, 0], # right
#         [0, 1], # up (vertical)
#         [0, -1]  # down (vertical)
#       ].freeze
    
#       # DIAGONAL_DIRS stores an array of diagonal directions
#       DIAGONAL_DIRS = [
#         [-1, 1], # up + left
#         [1, 1], # up + right
#         [-1, -1], # down + left
#         [1, -1]  # down + right
#       ].freeze
    
    
#       def horizontal_dirs
#         # getter for HORIZONTAL_DIRS
#         HORIZONTAL_DIRS
#       end
    
#       def diagonal_dirs
#         # getter for DIAGONAL_DIRS

#         DIAGONAL_DIRS
#       end
    
    
#       # should return an array of places a Piece can move to
#     #   def moves
#         # create array to collect moves
    
#         # iterate over each of the directions in which a slideable piece can move
#           # use the Piece subclass' `#move_dirs` method to get this info
#           # for each direction, collect all possible moves in that direction
#             # and add them to your moves array 
#             # (use the `grow_unblocked_moves_in_dir` helper method)
    
#         # return the final array of moves (containing all possible moves in all directions)
#         possible_moves = []
#         move_diffs.each do |move|
#             x,y = move
#             if (self.empty? == true && board.valid_pos?([pos[0]+x], [pos[1]+y]]) || (board.valid_pos?([pos[0]+x, [pos[1]+y]) && self.color != self[pos[0]+x, pos[1]+y].color)
#                 possible_moves << move    
#             end
#         end
#       end
    
    
#       private
    
#       def move_dirs
#         # subclass implements this
#         raise NotImplementedError # this only executes if 
#       end
    
    
#       # this helper method is only responsible for collecting all moves in a given direction
#       # the given direction is represented by two args, the combination of a dx and dy
#       def grow_unblocked_moves_in_dir(dx, dy)
#         # create an array to collect moves
#         moves = []
#         x,y = pos
#         (0..7).each do |i|
#             new_x = x+i*dx
#             new_y = y+i*dy
#             new_pos = [new_x, new_y]
#             if board.empty?()
#                 moves << new_pos
#             end
#         # get the piece's current row and current column
        
#         # in a loop:    
#           # continually increment the piece's current row and current column to generate a new position
#           # stop looping if the new position is invalid (not on the board); the piece can't move in this direction
#           # if the new position is empty, the piece can move here, so add the new position to the moves array
#           # if the new position is occupied with a piece of the opposite color, the piece can move here (to capture the opposing piece), so add the new position to the moves array
#             # but, the piece cannot continue to move past this piece, so stop looping
#           # if the new position is occupied with a piece of the same color, stop looping
    
#         # return the final moves array

        


#       end




#     # def diagonal
        
#     #     diag = []
#     #     (0..7).each do |i|
#     #         diag << [(+i), (+i)]
#     #         diag << [(-i), (-i)]
#     #         diag << [(+i), (-i)]
#     #         diag << [(-i), (+i)]
#     #     end
#     #     diag
#     # end

#     # def horizontal
        
#     #     h = []
#     #     (0..7).each do |i|
#     #         h << [(+i), 0]
#     #         h << [(-i), 0]       
#     #     end
#     #     h
#     # end

#     # def vertical
        
#     #     v = []
#     #     (0..7).each do |i|
#     #         v << [0, i]
#     #         v << [0, -i]       
#     #     end
#     #     v
#     # end

#     # def both
        
#     #     b = []
#     #     b = vertical(pos) + horizontal(pos)
#     #     b
#     # end

#     # def everything
#     #     vertical(pos) + horizontal(pos) + diagonal(pos)
#     # end

#     # def move_dirs_diag(x)
#     #     case x
#     #     when 1
#     #         diagonal.select {|el| el[0]>=0 && el[1]>=0}
#     #     when 2
#     #         diagonal.select {|el| el[0] < 0 && el[1] >= 0}
#     #     when 3
#     #         diagonal.select {|el| el[0] < 0 && el[1] < 0}
#     #     when 4
#     #         diagonal.select {|el| el[0] >= 0 && el[1] < 0}
#     #     end
#     # end

#     # def move_dirs
#     #     raise NotImplementedError
#         # case x
#         # when 1
#         #     both.select {|el| el[0]>=0 && el[1]>=0}
#         # when 2
#         #     both.select {|el| el[0] < 0 && el[1] >= 0}
#         # when 3
#         #     both.select {|el| el[0] < 0 && el[1] < 0}
#         # when 4
#         #     horizontal.select {|el| el[0] >= 0 && el[1] < 0}
#         # end
#     # end
end
