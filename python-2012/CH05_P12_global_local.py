
b = 10 # global
def code(a):
    global b
    b = 5 # local
    c = a + b
    print("ans is",c)

y = code(5)
print(y)