# pop()
student = {
    "name": "Mary",
    "age": 21,
    "course": "Python"
}
removed = student.pop("age")
print("Removed value:", removed)
print("Updated dictionary:", student)

#  del
student = {
    "name": "Mary",
    "age": 21,
    "course": "Python"
}
del student["course"]
print(student)

#  clear()

student = {
    "name": "Mary",
    "age": 21,
    "course": "Python"
}
student.clear()
print(student)
    
