# Immutable: int, float, bool, str, tuple

x = 10
print("x id before:", id(x))

x += 5
print(x)
print("x id after:", id(x))

name = "Mary"
print("name id before:", id(name))

name += " Doe"
print(name)
print("name id after:", id(name))

# Mutable - list, dict, set

# set
numbers = [1, 2, 3]
print("numbers id before:", id(numbers))

numbers.append(4)
print(numbers)
print("numbers id after:", id(numbers))

# dict
student = {"name": "Tanvi", "age": 20}
print("student id before:", id(student))

student["age"] = 22
print(student)
print("student id after:", id(student))