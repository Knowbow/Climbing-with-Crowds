require_relative "piece"
require 'singleton'

class NullPiece < Piece
    include Singleton
    def initialize
    end

    self.instance.object_id
end