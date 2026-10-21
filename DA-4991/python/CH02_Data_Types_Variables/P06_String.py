# string
str1 = 'Hello'
str2 = "Python"
str3 = """This is
a multi-line
string"""

print(str1)
print(str2)
print(str3)

# String Concatenation
first_name = "Hello"
last_name = "Hi"
full_name = first_name + " " +last_name
print("Full Name:", full_name)
age = 20
print("I am " + str(age) + " years old.")

#  String Slicing
# Basic
text = "PythonProgramming"
# Extract "Python"
print(text[0:6])
# Extract "Programming"
print(text[6: ])

# Using Negative Index
text = "PythonProgramming"
# Last character
print(text[-1])
# Last 11 Characters
print(text[-11:])

#  String Formatting
# f-strings
name = "Mary"
age = 90
print(f"My name is {name} and i am {age} years old...")

# .format()
name = "Mary"
age = 20
print("My name is {} and I am {} years old.".format(name, age))

# Percentage %
name = "Mary"
age = 20
print("My name is %s and I am %d years old." % (name, age))

