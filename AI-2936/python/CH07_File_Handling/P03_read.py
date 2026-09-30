# Reading from a file
file = open("sample.txt", "r")
content = file.read()
print(content)
file.close()

#  Reading File Line by Line
file = open("sample.txt", "r")
for line in file:
    print(line)
file.close()