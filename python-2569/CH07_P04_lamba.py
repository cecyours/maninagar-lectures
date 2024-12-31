

s = lambda a,b:a+b

x = s(4,2)
print(x)

d = lambda a,b:a/b

x = d(3,1)
print(x)

x = 3.14

def area(r):
    global x
    x = r   

print("before call ",x)
area(30)
print("after call ",x)
    