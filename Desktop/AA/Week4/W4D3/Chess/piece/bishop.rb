require_relative "slideable"


class Bishop < Piece
include Slideable
def symbol
    '♝'.colorize(color)
  end
    
end
