file = open("students.csv", "r")

for line in file:
    data = line.strip().split(",")
    print(data)
file.close()