import json
student = {
    "name": "Mary",
    "age": 21,
    "course": "Python"
}
json_data = json.dumps(student, indent=4)
print(json_data)