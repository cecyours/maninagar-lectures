import random
# k = list([1,2,3,4,5,6,7,8,9,0])

# print(k,type(k))

# for i in k:
#     print(i)

n = int(input("Enter the size of elements : "))

l = list()
# l = []

# for i in range(n):
#     x = int(input("Enter the number : "))
#     l.append(x)

# print(l)

for i in range(n):
    n = random.randint(1,9)*100
    l.append(n)
    
print(l)

k = [23]*10000
print(k)


