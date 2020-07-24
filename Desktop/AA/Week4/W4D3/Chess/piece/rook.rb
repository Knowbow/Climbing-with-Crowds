require_relative 'piece'
require_relative "slideable"
require "colorize"

class Rook < Piece
    include Slideable
    
    def symbol
        '♜'.colorize(color)
    end

    def moves(pos)
         
    end
    def move_dirs
        
    end
  
end 