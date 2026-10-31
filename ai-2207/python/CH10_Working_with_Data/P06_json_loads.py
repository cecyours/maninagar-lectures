import json
json_string = '{"name": "Mary", "age": 21, "course": "Python"}'

data = json.loads(json_string)
print("Name: ", data["name"])
print("Age:", data["age"])
print("Course:", data["course"])