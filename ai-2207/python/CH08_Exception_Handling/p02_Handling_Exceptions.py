# Using try and except
# Handling division error using try and except
num1 = 10
num2 = 0
try:
    result = num1 / num2
    print("Result:", result)
except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")

# Handling Multiple Exceptions
try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print("Result:", result)
except ValueError:
    print("Error: Invalid input. Please enter a number.")
except ZeroDivisionError:
    print("Error: Division by zero is not allowed.")


# Using the else Block

try:
    num = int(input("Enter a number: "))
    result = 20 / num
except ZeroDivisionError:
    print("Cannot divide by zero.")
else:
    print("Result:", result)
    
# Using the finally Block
try:
    file = open("data.txt", "r")
    print(file.read())
except FileNotFoundError:
    print("File not found.")
finally:
    print("Program execution completed.")

# Comprehensive Example:
try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ValueError:
    print("Invalid input. Please enter a numeric value.")
except ZeroDivisionError:
    print("Division by zero is not allowed.")
else:
    print("Calculation successful. Result:", result)
finally:
    print("End of program.")