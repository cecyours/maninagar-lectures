# Writing user data to a file
with open("users.txt", "w") as file:
    file.write("Name: Mary\n")
    file.write("Email: mary@example.com\n")
# Reading user data from the file
with open("users.txt", "r") as file:
    content = file.read()
    print(content)