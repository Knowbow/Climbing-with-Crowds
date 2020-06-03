require_relative "piece"
require 'singleton'

class NullPiece < Piece
    include Singleton

    def initialize
        @symbol  = ""
        @color = :none
    end

    def symbol
        # '♜'.colorize(color)
        " "
    end

    def empty?
        true
    end
    self.instance
end