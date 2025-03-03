

# class Student:
#     def __init__(self,id,name,course):
#         self.student = {"id":id,"name":name,"course":course}
#         pass

# s = Student(12,"Gk","python")

# print(s.student["id"])
# print(s.student["name"])
# print(s.student["course"])


class Student:
    def __init__(self,id,name,course):
        self.name = name
        self.id = id
        self.course = course
    
    def display(self):
        print(f" {self.id}, {self.name}, {self.course}")


s1 = Student(12,"Gk","python")
s2 = Student(10,"heena","php")
s3 = Student(15,"mehul","raman")

s1.display()
s2.display()
s3.display()