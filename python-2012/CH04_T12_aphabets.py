
start = 65 # A
end = start+26 # z

counter = 1
for i in range(start,end):
    print(chr(i), end=" ")

    if counter%5==0:
        print()
    counter+=1