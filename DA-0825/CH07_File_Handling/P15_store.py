with open("user.txt", "w") as file:
    file.write("Name: Mary\n")
    file.write("Email: mary@example.com\n")

with open("user.txt", "r") as file:
    content = file.read()
    print(content)