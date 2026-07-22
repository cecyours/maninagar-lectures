# file 1 : source : demo.txt : r
# file 2 : destination : home.txt : w

source = "./assets/demo.txt"
destination = "./assets/home.txt"

with open(source,"r") as source_file:
    data = source_file.read() 

with open(destination,"w") as destination_file:
    destination_file.write(data)

print("file copied !!")