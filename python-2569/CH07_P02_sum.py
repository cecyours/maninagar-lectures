
def sum(a,b): # header
    #body
    print("calculating sum ...")
    return a+b # return statement

a = int(input("Enter a number : "))
b = int(input("Enter a number : "))
x = sum(a,b)
print(x,"is result")

def is_pass(marks):
    if marks>33:
        return True
    return False

m = float(input("Enter the marks : "))
if(is_pass(m)):
    print("congo...")
else:
    print("Better luck next time")