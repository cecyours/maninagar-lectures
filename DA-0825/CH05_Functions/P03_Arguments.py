# Default Argument
def power(base, exponent=2):
    result = base ** exponent
    print("Result =", result)
power(5)
power(5, 3)  

# Keyword Arguments
def employee(name, salary, department):
    print("Name:", name)
    print("Salary:", salary)
    print("Department:", department)
employee("Amit", department="IT", salary=50000)

# Default and Keyword Arguments
def order(item, quantity=1, price=100):
    total = quantity * price
    print("Item:", item)
    print("Quantity:", quantity)
    print("Total Price:", total)
order("Notebook")
order("Pen", quantity=5)
order(item="Laptop", quantity=2, price=45000)