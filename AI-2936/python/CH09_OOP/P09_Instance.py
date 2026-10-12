class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
    def display(self):
        print("Name:", self.name)
        print("Marks:", self.marks)
# Creating object
s1 = Student("Mary", 90)
# Calling instance method
s1.display()
