# Strings can be defined using:
# Single quotes
str1 = 'Hello'
# Double quotes
str2 = "Python"
# Triple quotes for multi-line strings
str3 = """This is
a multi-line
string"""
print(str1)
print(str2)
print(str3)

# String Concatenation
first_name = "Mary"
last_name = "Doe"
# Concatenate with +
full_name = first_name + " " + last_name
print("Full Name:", full_name)

age = 20
print("I am " + str(age) + " years old.")

# String Slicing
text = "PythonProgramming"
# Extract "Python"
print(text[0:6])
# Extract "Programming"
print(text[6:])

text = "PythonProgramming"
# Last character
print(text[-1])
# Last 11 characters
print(text[-11:])

text = "PythonProgramming"
# Every 2nd character
print(text[0:6:2])
# Reverse the string
print(text[::-1])

# String Formatting
name = "Mary"
age = 2
print(f"My name is {name} and I am {age} years old.")

name = "Mary"
age = 20
print("My name is {} and I am {} years old.".format(name, age))

name = "Mary"
age = 20
print("My name is %s and I am %d years old." % (name, age))

# Combining Concatenation, Slicing, and Formatting
full_name = "Mary Doe"
# Extract first and last name
first_name = full_name[:5]
last_name = full_name[6:]
# Greeting message using concatenation and formatting
greeting = "Hello, " + first_name + "! Welcome to " + f"{last_name}'s Python tutorial."
print(greeting)

