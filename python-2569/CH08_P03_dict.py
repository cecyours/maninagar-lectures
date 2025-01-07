
student = {"name":"Krishna","rollno":30,"subject":"python"}
print(student)

# indexing
print(student["name"])
print(f" hey, my name is {student["name"]}, {student["rollno"]}")

# slicing 
data = ("name","subject")
for i in data:
    print(student[i])

# print(student["namex"])

student["name"] = "Hari"
print(student.get("namex","Unknown"))
print(student.get("name"))
