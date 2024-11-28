from array import array as arr

x = arr('I',[1,2,3,4,5,6,7,8,9])

print(x)

for i in x:
    print(i,i*i)
    
print("data length : ",len(x))