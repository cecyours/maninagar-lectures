# Variables of different types
a = 10            # integer
b = 3.14          # float
c = "Python"      # string
d = True          # boolean

# Type checking
print("Type of a:", type(a))
print("Type of b:", type(b))
print("Type of c:", type(c))
print("Type of d:", type(d))

# Converting to Integer
x = 10.75
y = "20"
# Convert float to int
x_int = int(x)
print("x:", x, "-> x_int:", x_int)
# Convert string to int
y_int = int(y)
print("y:", y, "-> y_int:", y_int)

# Converting to Float 
a = 10
b = "15.5"
# Convert int to float
a_float = float(a)
print("a:", a, "-> a_float:", a_float)
# Convert string to float
b_float = float(b)
print("b:", b, "-> b_float:", b_float)

# Converting to String
num = 50
pi = 3.1416
flag = True
# Convert to string
print(str(num), type(str(num)))
print(str(pi), type(str(pi)))
print(str(flag), type(str(flag)))

# Converting to Boolean
a = 0
b = 10
c = ""
d = "Python"
print(bool(a))  # False because 0 is falsy
print(bool(b))  # True because non-zero is truthy
print(bool(c))  # False because empty string is falsy
print(bool(d))  # True because non-empty string is truthy

# Implicit Type Conversion
a = 5       # int
b = 3.5     # float
result = a + b  # int is converted to float
print(result, type(result))

# Explicit Type Conversion
a = "100"
b = "50"
# Convert strings to integers before addition
sum_val = int(a) + int(b)
print("Sum:", sum_val, type(sum_val))


# Program to calculate the average of three numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))
average = (num1 + num2 + num3) / 3
print(f"The average of {num1}, {num2}, and {num3} is {average:.2f}")