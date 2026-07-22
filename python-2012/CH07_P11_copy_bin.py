# file 1 : source : mascev.png : r
# file 2 : destination : cec.png : w

source = "./assets/mascev.png"
destination = "./assets/cec.png"

with open(source,"rb") as source_file:
    data = source_file.read() 

with open(destination,"wb") as destination_file:
    destination_file.write(data)

print("file copied !!")