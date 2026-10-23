number = [1, 2, 3]
print("number id before:", id(number))

number.append(4)
print(number)
print("number id after:", id(number))


student = {"name": "tanvi", "age" : 22}
print("Student id before:", id(student))
student["age"] = 23
print(student)
print("student id after:", id(student))