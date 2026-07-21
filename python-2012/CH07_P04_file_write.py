

filename = "./assets/example.txt"

file = open(filename,"w")

file.write("Hello World 1\n")
file.write("Hello World 2\n")
file.write("Hello\nWorld 3\n")

print("file created succefully")
file.close()
