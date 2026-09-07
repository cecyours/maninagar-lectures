file = open("sample.txt", "a")
file.write("\nThis line is added using append mode.")
file.close()

# with Statement
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)
