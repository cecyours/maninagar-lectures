

class A:

    def __init__(self):
        print("Hello World")

    def display(self):
        print("I am display !!")

    def __del__(self):
        print("User is deleting me !!")

a1 = A()
a2 = A()
a6 = A()

del a6

# a6.display()
a4 = A()

print("LAST STATELEMT...")