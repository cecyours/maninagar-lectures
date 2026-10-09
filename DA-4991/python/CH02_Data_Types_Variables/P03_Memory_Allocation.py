# Variable

x = 10
y = "Python"

print("X = ", x)
print("Y = ", y)

# Dynamic Typing
var = 10 # var is an integer
print(var, type(var))
var = "Hello" # now var is a string
print(var, type(var))

#  Memory Allocation

a = 100
b = a
c = b

print(a, b, c)

# Memory Reuse
x = 10
y = 10
print(id(x))
print(id(y))

# Immutable
x = 5
print(id(x))

x += 1
print(id(x)) # change add

# Mutable 
lst = [1, 2, 3]
print(id(lst))

lst.append(4)
print(id(lst))

# Deleting Variables

x = 100
print(x)

# del x 
print(x)

# Demonstrate variable assignment and memory
a = 50
b = a # b references same object
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))
a += 10 # a now references a new object
print("After changing a:")
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))
