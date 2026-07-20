# break 
for i in range(10):
    if i == 5:
        break   
    print(i)
    
count = 1
while True:
    print(count)
    if count == 4:
        break
    count += 1
    
# continue 
for i in range(6):
    if i == 3:
        continue
    print(i)
    
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue
    print(count)
    
# pass 
for i in range(5):
    if i == 3:
        pass
    print(i)
    
for number in range(1, 11):
    if number == 2:
        continue
    if number == 8:
        break
    if number == 5:
        pass
    print(number)