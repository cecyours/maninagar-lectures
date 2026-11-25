# Immutable

x = 10
print("x id before:", id(x))
x += 5 # Modify x
print("x =", x)
print("x id after:", id(x))

name = "Jay"
print("name id before:", id(name))
name += " Vyash" # Modify x
print(name)
print("name id after:", id(name))


# Mutable
numbers = [1, 2, 3]
print("numbers id before:", id(numbers))
numbers.append(4) # Modify list
print(numbers)
print("numbers id after:", id(numbers))


student = {"name":"Jay", "age":20}
print("student id before:" ,id(student))
student["age"] = 21
print(student)
print("student id after:", id(student))
