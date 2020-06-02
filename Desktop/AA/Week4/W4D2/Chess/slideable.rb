module Slideable
    def diagonal
        x, y = pos
        diag = []
        (0..7).each do |i|
            diag << [(+i), (+i)]
            diag << [(-i), (-i)]
            diag << [(+i), (-i)]
            diag << [(-i), (+i)]
        end
        diag
    end

    def horizontal
        x, y = pos
        h = []
        (0..7).each do |i|
            h << [(+i), 0]
            h << [(-i), 0]       
        end
        h
    end

    def vertical
        x, y = pos
        v = []
        (0..7).each do |i|
            v << [0, i]
            v << [0, -i]       
        end
        v
    end

    def both
        x, y = pos
        b = []
        b = vertical(pos) + horizontal(pos)
        b
    end

    def everything
        vertical(pos) + horizontal(pos) + diagonal(pos)
    end

    def move_dirs_diag
        case x
        when 1
            diagonal.select {|el| el[0]>=0 && el[1]>=0}
        when 2
            diagonal.select {|el| el[0] < 0 && el[1] >= 0}
        when 3
            diagonal.select {|el| el[0] < 0 && el[1] < 0}
        when 4
            diagonal.select {|el| el[0] >= 0 && el[1] < 0}
        end
    end

    def move_both(x)
        case x
        when 1
            both.select {|el| el[0]>=0 && el[1]>=0}
        when 2
            both.select {|el| el[0] < 0 && el[1] >= 0}
        when 3
            both.select {|el| el[0] < 0 && el[1] < 0}
        when 4
            horizontal.select {|el| el[0] >= 0 && el[1] < 0}
        end
    end
end
