#  Immutable

numbers = (10, 20, 30, 40)
print("Original tuple:", numbers)
print("First element:", numbers[0])
print("Third element:", numbers[2])
# numbers[1] = 90

# Tuple Packing
person = ("Mary", 21, "Student")
print("Packed tuple:", person)

# Unpacking
person = ("Mary", 21, "Student")
name, age, profession = person

print("Name:", name)
print("Age:", age)
print("Profession:", profession)