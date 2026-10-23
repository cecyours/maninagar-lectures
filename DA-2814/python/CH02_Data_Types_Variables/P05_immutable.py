x = 10
print("X id before: ", id(x))
x += 5
print("X =", x)
print("x id after: ", id(x))

name = "Hello"
print("name id before:", id(name))

name += " i`m"
print(name)
print("name id after", id(name))