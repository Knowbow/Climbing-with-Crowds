def sum_to(n)
    return "nil" if n<0
    return 0 if n == 0

    n + sum_to(n-1)
end
puts sum_to(5)

def add_numbers(n)
    return 0 if n.length == 0
    
    n[0] + add_numbers(n[1..-1])
end
puts add_numbers([1,2,3,4])

def gamma(n)
    return nil if n==0
    return 1 if n==1
    
    (n-1) * gamma(n-1)
end
puts gamma(4)
puts gamma(8)

def ice_cream_shop(flavors, favorite)
    return false if flavors.length<1
    if flavors[0] == favorite
        return true
    else
        ice_cream_shop(flavors[1..-1], favorite)
    end
end
puts ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  # => returns false
puts ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true
puts ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')  # => returns false
puts ice_cream_shop(['moose tracks'], 'moose tracks')  # => returns true
puts ice_cream_shop([], 'honey lavender')  # => returns false

def reverse(string)
    return string[0] if string.length==1
    return "" if string.length == 0
    string[-1] + reverse(string[0...-1])
end
puts reverse("house") # => "esuoh"
puts reverse("dog") # => "god"
puts reverse("atom") # => "mota"
puts reverse("q") # => "q"
puts reverse("id") # => "di"
puts reverse("") # => ""
