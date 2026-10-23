import json

courses = ["python", "java", "cpp"]
json_data = json.dumps(courses)

print(json_data)


# Pretty Printing 
#  indent parameter
student = {
    "name": "Ridham",
    "age": 22,
    "course": "python"
}

json_data = json.dumps(student, indent=4)
print(json_data)