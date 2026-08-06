

class Student:

    def display(self): # instance method
        print("I am method 1 : instance")

    @classmethod
    def info(cls): # class method
        print("I am method 2 : class")

    @staticmethod
    def data(): # empty in static
        print("I am method 3 : static")


# Student.display()
s = Student()
s.display()

Student.info() # direct class name thi access

Student.data()
s.data()