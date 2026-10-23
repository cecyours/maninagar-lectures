import json

student = {
    "name": "Ridham",
    "age": 21,
    "course": "Python"
}

json_data = json.dumps(student)
print(json_data)