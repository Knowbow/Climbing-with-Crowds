def range(min, max)
    return [] if max<=min
    range(min, max-1) << max-1
end

# print range(1,5)

def exponentiation (base ,n) # version 1 
    return 1 if n == 0 
    base * exponentiation(base, n - 1)
end 

def exp(base ,n) # version 2
    return base if n == 1 
    return 1 if n == 0 

    if n.even?
        (exp(base, n / 2) ** 2)
    else 
        base * (exp(base,(n - 1)/ 2 ) ** 2 )
    end 
end 

class Array
    def deep_dup
        new_arr = []
        # return [] if self.empty?
        # return self.map {|el| el} if self.length == 1 
        
        self.each do | el | 
            if el.is_a?(Array) # if el is arr 
                new_arr += [el.deep_dup] # recursive case  [3,[4]] []
            else
                new_arr << el # base case 
            end
        end 
        new_arr
    end
end
# version 1
def fib(n)
    # base case 
    return [] if n == 0 
    return [ 0 ] if n == 1 
    return [ 0, 1 ] if n == 2 

    # recursive case 
    fib_a = fib(n - 1) # => fib(3) -> fib(2) => [0,1]~fib(2) << fib_a[-1]+fib_a[-2] => 3 
    fib_a << fib_a[-1]+fib_a[-2]
end 

# version 2 
def fibs(n)
    arr = [0,1]
    
    (n - 2).times do | n | 
        arr << arr[-1] + arr[-2]
    end 
    arr 
end 

def bsearch(array, target)
    return nil if array.length == 1 && array.first != target 

    mid_el = array[array.length / 2]
    case target <=> mid_el
    when 1
        upper_half_arr = bsearch(array[(array.length / 2) + 1 .. -1], target) # => result in idx anyways 
        if upper_half_arr.nil? 
            return nil 
        else 
            upper_half_arr + (array.length / 2) + 1
        end
    when 0
        return array.index(mid_el)
    when -1
        bsearch(array[0 ... array.length / 2], target)
  end
end

class Array 
    def merge_sort 
        return [] if self.length == 0
        return self if self.length ==1
        mid_idx = self.length / 2
        left = self[ 0 ... mid_idx]
        right = self[mid_idx  .. -1]
        arr_left = left.merge_sort 
        arr_right = right.merge_sort
        merge(arr_left, arr_right)
    end 

    def merge(arr1, arr2)
        merged = []
        until arr1.length==0 || arr2.length == 0
            if arr1.first < arr2.first
                merged << arr1.shift
            else
                merged << arr2.shift
            end
        end
        merged += arr1
        merged += arr2

        merged
    end 
end 
arr = [38,27,43,3,9,82,10]
p arr.merge_sort

# arr.drop( n ) drops n elements from the front, does not mutate the arr 
