import json

student = {
    "name": "Kunj",
    "age": 22,
    "course": "AI/ML"
}

json_data = json.dumps(student)
print(json_data)