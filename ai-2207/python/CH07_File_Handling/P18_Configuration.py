with open("config.txt", "w") as file:
    file.write("theme=dark\n")
    file.write("language=English\n")
# Reading configuration settings
with open("config.txt", "r") as file:
    for line in file:
        print(line.strip())
