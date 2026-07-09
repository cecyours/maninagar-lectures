
def sum(n): # defination
    # body
    if n<=0: # base condition
        return 0 # return part
    return n+sum(n-1) # recursion


total = sum(500) # 1,2,3,4,5=15, call
print("sum is ",total)