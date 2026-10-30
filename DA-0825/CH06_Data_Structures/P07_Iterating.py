# keys and values together
student = {
    "name": "Mary",
    "age": 21,
    "course": "Python"
}
for key, value in student.items():
    print(key, ":", value)
    
# enumerate()
student = {
    "name": "Mary",
    "age": 21,
    "course": "Python"
}
for index, key in enumerate(student):
    print(index, key, ":", student[key])
