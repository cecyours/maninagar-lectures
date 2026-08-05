# Immutable Types:
# int → Integers
# float → Floating-point numbers
# bool → Boolean values (True / False)
# str → Strings
# tuple → Tuples
# frozenset → Immutable sets

x = 10
print("x id before:", id(x))
x += 5 # Modify x
print("x =", x)
print("x id after:", id(x))

name = "Mary"
print("name id before:", id(name))
name += " Doe" # Concatenate
print(name)
print("name id after:", id(name))
