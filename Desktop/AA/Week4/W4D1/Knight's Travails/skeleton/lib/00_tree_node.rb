class PolyTreeNode
    
    attr_reader :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(passed_node = nil)
        if @parent != nil
            child_index = @parent.children.index(self)
            @parent.children.delete_at(child_index)
        end
        @parent = passed_node

        if passed_node != nil
            passed_node.children << self
        end 
    end

    def add_child(child)
        child.parent=self
    end

    def remove_child(child)
        child_index = @children.index(child)
        @children.delete_at(child_index)

        child.parent=nil
    end

    def bfs(target)
        return self if self.value == target
        queue = []
        @children.each { |child| queue << child }
        
        until queue.empty?
            test_target = queue.shift
            if test_target.value == target
                return test_target
            end
            test_target.children.each {|child| queue << child}
        end
        nil
    end
    
    def dfs(target)
        return self if self.value == target
        @children.each do |child|
           result = child.dfs(target)
           return result if result != nil
        end
        
        nil
    end


end