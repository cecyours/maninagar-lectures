var = 10
print(var, type(var))
var = "hello"
print(var, type(var))

# Memory Allocation
a = 100
b = a

print(a)
print(b)

c = a 
print(c)

c = b
print(c)

c = 10
print(c)

# Memory Reuse
x = 10
y = 10
print(id(x))
print(id(y))

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

x = 100
print(x)
del x
print(x)

a = 50
b = a 
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))
a += 10 
print("After changing a:")
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))