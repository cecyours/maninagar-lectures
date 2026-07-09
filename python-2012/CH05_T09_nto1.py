
def code(n):#10,9,8...1
    if n==0:
        return
    print(n)
    code(n-1)

code(10)