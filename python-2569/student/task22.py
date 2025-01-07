import random

n = int(input("Enter your number:- "))

l = list()

for i in range(n):
    n = random.randint(1,9)*100
    l.append(n)
    
print(l)

k = [23]*100
print(k)