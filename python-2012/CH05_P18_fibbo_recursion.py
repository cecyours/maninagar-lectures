
def fibbo(n):
    if n<=1:
        return n
    return fibbo(n-1)+fibbo(n-2)


for i in range(6):
    print(fibbo(i))