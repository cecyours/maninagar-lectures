from time import time

lst = []
start = time()
# for i in range(10_000_000):
#     lst.append(i+1)

lst = (i for i in range(10_000_000)) 
end = time()
print(start,end,end-start)

# print(type(lst))
print(lst)
for i in lst:
    print(i,end='\r')