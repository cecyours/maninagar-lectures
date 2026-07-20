
filename = "./assets/records.txt"

file = open(filename,"w")
for i in range(1,101):
    print(i)
    file.write(f"mari line {i}\n")
file.close()