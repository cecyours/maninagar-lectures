

def code(*d):
    avg = sum(d)/len(d)
    print(d)
    return avg


x = code(10,15,20)
print("x",x)

y = code(10,20,20,20,10)
print("y",y)