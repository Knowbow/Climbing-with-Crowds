class Employee
    attr_reader :name, :title, :salary, :boss
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end
    def bonus(multiplier)
        bonus = (@salary) * multiplier
    end
end

class Manager < Employee
    attr_reader :name, :title, :salary, :boss, :employees
    def initialize(name, title, salary, boss, employees=[])
        super(name, title, salary, boss)
        @employees = employees
    end

    def bonus(multiplier)
        total = 0
        @employees.each do |employ|
            total += employ.salary
        end
        bonus = (total) * multiplier
    end

end

ned = Manager.new("ned", "founder", 1000000, nil)
darren = Manager.new("darren", "TA manager", 78000, "ned")
shawna = Employee.new("shawn", "TA", 12000, "darren")
david = Employee.new("david", "ta", 10000, "darren")

ned.employees.push(darren, shawna, david)
darren.employees.push(shawna, david)

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000

