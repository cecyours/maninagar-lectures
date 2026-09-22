try:
    file = open("data.txt", "r")
    content = file.read()
    print(content)
    file.close()
except FileNotFoundError:
    print("Error: File not found.")
except PermissionError:
    print("Error: Permission denied.")



