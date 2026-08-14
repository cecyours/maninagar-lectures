data = [4,7,7,8,9,2,5,3,1,6]
target = 74
isFound=False

data.sort()
print(data)

low = 0
high = len(data)-1

while low<=high:
    mid = (low+high)//2
    if target==data[mid]:
        isFound=True
        break
    
    elif target<data[mid]:
        high=high-1
    elif target>data[mid]:
        low=low+1


if isFound:
    print(f"{target} found")
else:
    print(f"{target} not found")