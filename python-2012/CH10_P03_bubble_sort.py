
data = [41,1,90,50,69,13]
# data.sort()
n = len(data)

print(data)
print("size : ",n)

for i in range(n):
    # print(i,": ",data[i])
    for j in range(0,n-i-1):
        print(data[j],"",data[j+1])
        if data[j]>data[j+1]:
            data[j+1],data[j] = data[j],data[j+1]

    print("-------")
    print(data)

print("-------")