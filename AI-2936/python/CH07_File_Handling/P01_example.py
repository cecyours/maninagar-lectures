# Writing to a file
file = open("example.txt", "w")
file.write("Hello Ridham")
file.close()

# Reading from a file
file = open("example.txt", "r")
content = file.read()
print(content)
file.close()