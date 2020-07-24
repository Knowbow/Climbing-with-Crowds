require_relative "null_piece"
require_relative "piece"

class Board
    attr_reader :board

    def initialize
        @board = Array.new(8) {Array.new(8,0)}
        (0..7).to_a.each do |i|
            (0..7).to_a.each do |j|
                if i.between?(0, 1) || i.between?(6,7)
                    self[[i, j]]= 1
                else 
                    self[[i,j]] = 0
                end
            end
        end
    end

    
    def print
        @board.each do |row|
            puts "|" + row.join(" ") + "|"
        end
    end

    def move_piece(start_pos, end_pos)
        
        if !start_pos[0].between?(0,7) || !start_pos[1].between?(0,7) #|| !@board[start_pos].instance_of?(Piece) || !@board[end_pos].instance_of?(NullPiece)
            raise "error"
        elsif !end_pos[0].between?(0,7) || !end_pos[1].between?(0,7)
            raise "error on start"
        else
            self[start_pos], self[end_pos] = self[end_pos], self[start_pos] 
        end
            
        #end
    end

    def [](array)
        return @board[array[0]][array[1]]
    end 

    def []=(pos, val)
        @board[pos[0]][pos[1]] = val
    end 

end

a = Board.new

a.move_piece([0,0], [4,4])
# a.print
a.move_piece([1,1], [3,4])
a.print

