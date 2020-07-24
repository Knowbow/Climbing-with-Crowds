require_relative "piece"

class Pawn < Piece

    def initialize

    end

    def symbol

    end

    include Stepable

    private
    def at_start_row?

    end

    def forward_dir

    end

    def forward_steps

    end

    def forward_attacks

    end

end