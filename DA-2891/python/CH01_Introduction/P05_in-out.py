name = input("Enter Your name: ")
age = int(input("Enter Your age: "))

print("Name:", name, "Age:", age)

# Using f-strings
print(f"My name is {name} and i am {age} years old.")

# Using .format() method
print("My name is {} and i am {} years old.".format(name, age))

# Using string concatenation
print("My name is " + name + " and i am " + str(age) + "years old.")

# Single Line
a = 10
# ans = a ** 2

# print(ans)
print(a ** 2)

# separator and end parameters 
print("Python", "is", "fun", sep=" | ", end= "!!!\n")