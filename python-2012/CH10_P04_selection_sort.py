
data = [41,1,90,50,69,13]
# data.sort()
n = len(data)

for i in range(n):
    min_index=i
    for j in range(i+1,n):
        if data[j]<data[min_index]:
            min_index=j
    data[min_index],data[i] = data[i],data[min_index]
    print(data)

print(data)
