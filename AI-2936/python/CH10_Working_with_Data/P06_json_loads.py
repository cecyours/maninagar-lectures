import json

json_string = '{"name": "Ridham", "age": 21, "course": "python"}'
data = json.loads(json_string)

print("Name:", data["name"])
print("Age:", data["age"])
print("Course:", data["course"])
