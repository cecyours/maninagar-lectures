class Student:

    school = "ABC School"
    def __init__(self, name):
        self.name = name
    @classmethod
    def show_school(cls):
        print("School Name:", cls.school)
# Calling class method
Student.show_school()
