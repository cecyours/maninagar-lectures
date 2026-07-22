num = 10       
lang = "Python"

print("x =", num)
print("y =", lang)

# Dynamic Typing 
var = 10       # var is an integer
print(var, type(var))
var = "Hello"  # now var is a string
print(var, type(var))

# Memory Allocation
a = 100
b = a  # b references the same object as a
print(a, b)

x = 10
y = 10
print(id(x))
print(id(y))

# Mutable vs Immutable Objects

# Immutable example
# int, float, str, tuple
num1 = 5
print(id(num1))
num1 += 1
print(id(num1))  # memory address changes

# Mutable example
# list, dict, set
lst = [1, 2, 3]
print(id(lst))
lst.append(4)
print(id(lst))  # memory address remains same

# Delete
x = 100
print(x)
del x  # deletes the variable
# print(x)  # would raise NameError: name 'x' is not defined


# Demonstrate variable assignment and memory
a = 50
b = a        # b references same object
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))

a += 10     # a now references a new object
print("After changing a:")
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))

