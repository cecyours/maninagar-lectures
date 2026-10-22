with open("students.csv", "r") as file:
    for line in file:
        data = line.strip().split(",")
        print(data)