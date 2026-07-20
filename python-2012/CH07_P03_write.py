
filename = "./assets/username.txt"

file = open(filename,"w")

file.write("---------------\n")
file.write("Name : Mohan\n")
file.write("roll no : 302\n")
file.write("marks : 52.53\n")
file.write("---------------\n")

print(f"{filename} is created successfully")
file.close()
