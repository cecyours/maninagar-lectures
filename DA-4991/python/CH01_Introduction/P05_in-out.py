name = "yash"
age = 20

print("Name:", name, "Age:", age)

# Using f-strings
print(f"My name is {name} and i am {age} years old..")

# Using .format() method
print("My name is {} and i am {} years old..".format(name, age))

# Using string concatenation
print("My name is " + name + " and I am " + str(age) + " years old. ")

name = input("Enter you name: ")
print("Hello, "+ name + "!")

# separator and end parameters 
print("python", "is", "fun", sep=" | ", end= "!!!\n" )