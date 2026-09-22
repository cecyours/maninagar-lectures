results = ["Math: 85", "Science: 90", "English: 88"]
with open("report.txt", "w") as file:
    for result in results:
        file.write(result + "\n")