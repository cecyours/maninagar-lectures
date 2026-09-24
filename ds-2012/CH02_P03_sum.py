
baskets = [10,40,20,50,20,10,40,10]
total = 0

for i in baskets:
    total = i+total
    print(total)


print("total : ",total)
print("mean : ",(total/len(baskets)))
