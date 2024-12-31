import random
import sys

sys.setrecursionlimit(10**5)
def display(n):
    if n==0:
        return 0
    print("in",n)
    display(n-1)
    print("out",n)

print("init")
display(5)
print("out")