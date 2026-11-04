# Dynamic Typing 

var = 10
# print(var, type(var))

var = "hello"
print(var, type(var))


#  Memory Allocation
a = 100
print(a)
b = a
print(b)

c = a
print(c)

c = b
print(c)

c = 20
print(c)

# Memory Reuse
x = 10
y = 10
print(id(x))
print(id(y))

# Mutable vs Immutable
# Immutable

x = 5
print(id(x))
x += 1
print(id(x))

# Mutable 
lst = [1, 2, 3]
print(id(lst))

lst.append(4)
print(id(lst))
print(lst)


# Deleting Variables
x = 1000
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