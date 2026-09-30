def add_numbers(a, b):
    result = a + b
print("Sum =", result)
add_numbers(10, 5)

# Default Parameters

def greet(name="Guest"):
    print("Hello", name)
greet()
greet("Mary")

# Keyword Parameters
def student_info(name, age):
    print("Name:", name)
    print("Age:", age)
student_info(age=20, name="Mary")

# Variable-Length Parameters
def add_numbers(*numbers):
    total = 0
for num in numbers:
    total = total + num
print("Total =", total)
add_numbers(2, 4, 6, 8)

# Returning Multiple Values
def calculate(a, b):
    sum_value = a + b
    product = a * b
    return sum_value, product
s, p = calculate(4, 3)
print("Sum =", s)
print("Product =", p)

# Calculate Average 
def calculate_average(a, b, c):
    total = a + b + c
    avg = total / 3
    return avg
result = calculate_average(80, 90, 85)
print("Average =", result)
