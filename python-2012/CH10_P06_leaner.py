
data = [4,7,7,8,9,2,5,3,1,6]
target = 7
isFound=False

for i in range(len(data)):
    print("step ",(i)," : ",data[i])
    if target==data[i]:
        isFound=True
        break

if isFound:
    print(f"{target} found")
else:
    print(f"{target} not found")