
# formal agr
def task(a,b=30):
    print("-----------")
    print("a : ",a)
    print("b : ",b)
    
task(2,1) # actual passed
task(2)

task(b=3,a=39) # keywords argument

print("===================")
def display(*a): # arbitrary
    print("----------")
    for i in a:
        print(i)

display(39,3,2,5)