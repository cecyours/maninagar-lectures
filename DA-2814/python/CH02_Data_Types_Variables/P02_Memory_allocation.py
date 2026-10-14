# Variable Assignment
x = 10 
y = "Python"
print("x =", x)
print("y =", y)

#  Dynamic Typing 
var = 10 
print(var, type(var))
var = "Hello" 
print(var, type(var))

# Memory Allocation
a = 100
b = a 
print(a, b)

# Memory Reuse
x = 10
y = 10

print(id(x))
print(id(y))

# Immutable example
x = 5
print(id(x))

x += 1
print(id(x))

# mutable example
lst = [1, 2, 3]
print(id(lst))

lst.append(4)
print(id(lst))

# del
x = 100
print(x)
del x 
print(x)

# Variables and Memory Behavior

a = 50
b = a # b references same object
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))
a += 10 # a now references a new object
print("After changing a:")
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))
