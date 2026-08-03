

class Student:
    def __init__(self):
        print("new object create ",self)

    def display(self):
        print("you called me ",self)

x = Student()
x.display() # self value x

y = Student()
y.display() # self value y