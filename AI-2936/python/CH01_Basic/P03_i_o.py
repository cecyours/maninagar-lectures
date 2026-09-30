# Printing Multiple Items
name = "John"
age = 20
print("Name:", name, "Age:", age)

# Using f-strings
name = "John"
age = 20
print(f"My name is {name} and I am {age} years old.")

# Using .format()
name = "John"
age = 20
print("My name is {} and I am {} years old.".format(name, age))

# Using string concatenation
name = "John"
age = 20

print("My name is " + name + " and I am " + str(age) + " years old.")

# Separator and End Parameters in print()
print("Python", "is", "fun", sep=" | ", end="!!!\n")

# Program to greet user and calculate sum of two numbers
name = input("Enter your name: ")
print(f"Hello, {name}!")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
sum = num1 + num2
print(f"{name}, the sum of {num1} and {num2} is {sum}.")

name = "John"
age = 20
print(f"Name: {name} Age: {age}")