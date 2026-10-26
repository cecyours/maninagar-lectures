# Key-Value
student = {
    "name": "Prashant",
    "age": 18,
    "course": "Data Analitics"
}

print(student)
print("Name:", student["name"])
print("Age:", student["age"])
print("Course:", student["course"])

# get()
print(student.get("course"))

# Adding
student["number"] = 1234567899
print(student)

# update()
student.update({"number": 1232})
print(student)

# Removing
# pop()

removed = student.pop("number")
print("Removed value:", removed)
print("Updated dic: ", student)

# del
del student["course"]
print(student)

# clear()
student.clear()
print(student)