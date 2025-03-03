
for i in range(1,10):
    if(i%2==0):
        # break
        continue
    print(i)

print("i am other statement")


e = int(input("Enter nagative amount for exit : "))

if(e<0):
    exit(1)
    
print("I am rest of code...")