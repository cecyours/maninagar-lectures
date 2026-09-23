# Raising a ValueError
# Example of raising an exception
age = int(input("Enter your age: "))
if age < 18:
    raise ValueError("Age must be 18 or above.")
print("You are eligible.")

# raise with try and except
try:
    number = int(input("Enter a positive number: "))
    if number < 0:
        raise ValueError("Negative numbers are not allowed.")
    print("You entered:", number)
except ValueError as e:
    print("Error:", e)
    
# Raising a TypeError
value = "Python"
if not isinstance(value, int):
    raise TypeError("Value must be an integer.")

# Re-raising an Exception
try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ZeroDivisionError:
    print("Cannot divide by zero.")
    raise