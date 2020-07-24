class Piece
    attr_reader :pos, :board, :color 

    def initialize(color, board, pos)
        @pos = pos
        @board = board
        @color = color
        
    end

    #  def color
    #     color = %i(black, white)
    # end

    def to_s
        symbol
    end

    def empty?
        return false
    end

    def moves(pos)
        return []
    end

    def [](array)
        return @board[array[0]][array[1]]
    end

    def []=(pos, val)
        @board[pos[0]][pos[1]] = val
    end 

    def valid_moves()
        raise NotImplementedError
    end

    # def symbol
    #     raise NotImplementedError
    # end
    
end

