
class Person:
    def __init__(self):
        print("class Person")
    pass

class Faculty(Person):
    def __init__(self):
        super().__init__()
        print("class Faculty")

class Parent(Person):
    def __init__(self):
        super().__init__()
        print("class Parent")

class Student(Faculty,Parent):
    def __init__(self):
        super().__init__()
        print("class Student")


for i in Student.__mro__:
    print(i)