require_relative "./piece/null_piece"
require_relative "./piece/piece"
require_relative "./piece/rook"
require_relative "./piece/knight"
require_relative "./piece/queen"
require_relative "./piece/pawn"
require_relative "./piece/bishop"
require_relative "./piece/king"

class Board
    attr_reader :board

    def initialize
        @board = Array.new(8) {Array.new(8,0)}
        populate
    end
    
    def populate
        (0..7).to_a.each do |i|
            (0..7).to_a.each do |j|
                pos = [i,j]
                if (i == 0) && (j == 0 || j == 7)
                    self[pos]= Rook.new(:black, @board, [i,j])
                elsif (i == 7) && (j == 0 || j == 7)
                    self[pos]= Rook.new(:white, @board, [i,j])
                    
                elsif (i == 0) && (j == 1 || j == 6)
                    self[pos]= Knight.new(:black, @board, [i,j])
                elsif (i == 7) && (j == 1 || j == 6)
                    self[pos]= Knight.new(:white, @board, [i,j])
                    
                elsif (i == 0) && (j == 2 || j == 5)
                    self[pos]= Bishop.new(:black, @board, [i,j])
                elsif (i == 7) && (j == 2 || j == 5)
                    self[pos]= Bishop.new(:white, @board, [i,j])
                    
                elsif (i == 0) && (j == 3)
                    self[pos]= King.new(:black, @board, [i,j])
                elsif (i == 7) && (j == 4)
                    self[pos]= King.new(:white, @board, [i,j])    
                            
                elsif (i == 0) && (j == 4)
                    self[[i, j]]= Queen.new(:black, @board, [i,j])
                elsif (i == 7) && (j == 3)
                    self[[i, j]]= Queen.new(:white, @board, [i,j])                    

                elsif (i == 1)
                    self[[i, j]]= Pawn.new(:black, @board, [i,j])
                elsif (i == 6)
                    self[[i, j]]= Pawn.new(:white, @board, [i,j])

                else 
                    self[[i,j]] = NullPiece.instance
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
            
        
    end

    def [](array)
        return @board[array[0]][array[1]]
    end 

    def []=(pos, val)
        @board[pos[0]][pos[1]] = val
    end 

    def valid_pos?(pos)
        x,y = pos
        x.between?(0,7) && y.between?(0,7)
    end
end

a = Board.new

# a.move_piece([0,0], [4,4])
# a.print
a.move_piece([6,1], [4,1])

a.move_piece([1,1], [3,1])
# a.print
a.move_piece([7,1], [5,2])
a.move_piece([0,4], [7,3])
a.print