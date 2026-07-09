
def code(num):
    if num==0:
        return
    print("Hello ",num)
    code(num-1)


code(10)