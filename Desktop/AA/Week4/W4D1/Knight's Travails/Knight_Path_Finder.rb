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

    def find_path(end_pos)
        self.build_move_tree(@root_node)
        @root_node.bfs(end_pos)
    end

    def trace_path_back(end_pos) #       [...[5,7],[7,6]]
        return [@root_node.value] if end_pos == @root_node.value
        ending_node = find_path(end_pos)
        trace_path_back(ending_node.parent.value) + [end_pos]
    end

    def trace_path_back_itr(end_pos)
        ending_node = find_path(end_pos)
        path = [end_pos]
        until path.first == @root_node.value
            node = find_path(path.first)
            path.unshift(node.parent.value)
        end
        path
    end

end

kpf = KnightPathFinder.new([0, 0])
#p kpf.find_path([7, 6]).value
#p kpf.find_path([7, 6]).parent.value
p kpf.trace_path_back_itr([7,6])