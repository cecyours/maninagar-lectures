def greet():
    
    print("Welcome to Python Programming")

greet()


def message():
    
    print("Learning Python Functions")

message()
message()
message()

# Function with a Parameter

def greet(name):
    print("Hello", name)
greet("Mary")

# Function with Multiple Parameters

def add_numbers(a, b):
    result = a + b

print("Sum =", result)
add_numbers(5, 3)

# Returning a Value

def square(num):
    return num * num
result = square(4)
print("Square =", result)
