
data = [41,1,90,50,69,13]
# data.sort()
n = len(data)

for i in range(1,n):
    key = data[i]
    j = i-1
    while j>=0 and key<data[j]:
        data[j+1] = data[j]
        j-=1
    data[j+1] = key

print(data)

