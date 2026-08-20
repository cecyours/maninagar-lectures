# Creating a tuple
numbers = (10, 20, 30, 40)

print("Original tuple:", numbers)
# Accessing elements
print("First element:", numbers[0])
print("Third element:", numbers[2])

# Attempting to modify a tuple element
numbers[1] = 50

# Tuple packing
person = ("Mary", 21, "Student")
print("Packed tuple:", person)


# Tuple unpacking
person = ("Mary", 21, "Student")
name, age, profession = person
print("Name:", name)
print("Age:", age)
print("Profession:", profession)