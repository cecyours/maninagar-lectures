try:
    file = open("data.txt", "r")
except FileNotFoundError:
    print("File not found.")
else:
    content = file.read()
    print(content)
    file.close()