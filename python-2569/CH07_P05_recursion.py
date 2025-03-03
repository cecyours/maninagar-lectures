import random
# importing the sys module  
import sys
  
sys.setrecursionlimit(10**6)
def display(n): 
    if n==0: # base condition
        return 0
    print("in ",n)
    display(n-1)
    print("out ",n)
        
print("init")
display(5)
print("end")

 