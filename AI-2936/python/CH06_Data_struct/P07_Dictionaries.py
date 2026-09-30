student = {
"name": "Mary",
"age": 21,
"course": "Python"
}
print(student)
print("Name: ", student["name"])
print("Age: ", student["age"])

#  get() method
print(student.get("course"))

# Adding Elements to a Dictionary
student["number"] = 1324567899
print(student)

# update() method.
student.update({"city": "Ahemdabad"})
print(student)

# Removing Elements 
# pop()

removed = student.pop("city")
print("Removed Value: ", removed)
print("Updated: ", student)

# del keyword
del student["number"]
print(student)

# clear()
student.clear()
print(student)