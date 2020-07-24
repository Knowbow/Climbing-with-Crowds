class Piece
    attr_reader :pos, :board, :color 

    def initialize(pos, board, symbol)
        @pos = pos
        @board = board
        @color = symbol
    end

    def moves(pos)
        return []
    end
end

