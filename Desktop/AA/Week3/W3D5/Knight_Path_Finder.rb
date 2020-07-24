require_relative "skeleton/lib/00_tree_node.rb"
class KnightPathFinder

    def initialize(pos)
        @root_node = PolyTreeNode.new(pos)
        @considered_pos = [pos]
    end

    def self.valid_moves(pos)
        x,y=pos
        valid_move=[] 
        valid_move << [x+1, y+2]
        valid_move << [x+2, y+1]
        valid_move << [x-1, y+2]
        valid_move << [x-2, y+1]
        valid_move << [x-1, y-2]
        valid_move << [x-2, y-1]
        valid_move << [x+1, y-2]
        valid_move << [x+2, y-1]
        
        valid_move.select! do |position|
            ((0..7) ===  position[0]) && ((0..7) ===  position[1])
        end
        valid_move
    end

    def new_move_positions(pos)
        valid_move = KnightPathFinder.valid_moves(pos)
        filtered = valid_move - @considered_pos
        @considered_pos = (@considered_pos + valid_move).uniq
        filtered
    end

    def build_move_tree(pos)
        queue = []
        queue << @root_node
          
        until queue.empty?
            var = queue.shift
            array = new_move_positions(var.value)
            array.each do |position|
                child = PolyTreeNode.new(position)
                var.add_child(child)
                queue << child
                # test is position of var = target position
            end

        end
        

    end

end