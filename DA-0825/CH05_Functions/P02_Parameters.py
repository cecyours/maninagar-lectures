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

# Return Values
def calculate_average(a, b, c, d):
    total = a + b + c + d
    avg = total / 4
    return avg

result = calculate_average(12, 45, 78, 56)
print("Avg: ", result)