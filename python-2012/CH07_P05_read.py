
filename = "./assets/records.txt"

file = open(filename,"r")

line = file.read()

print("content : ",line)

file.write("denver is good")
file.close()