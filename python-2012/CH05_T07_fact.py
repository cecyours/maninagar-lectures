
def fact(n):
    f = 1
    for i in range(1,n+1):
        f = f*i
    return f


n = 5
x = fact(n)
print(f"fact of {n} is {x}") # fact of 5 is 120,1x2x3x4x5=120

n = 3
x = fact(n)
print(f"fact of {n} is {x}") # 1x2x3=6

