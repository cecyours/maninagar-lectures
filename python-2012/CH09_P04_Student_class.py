# class  = attributes(variables) + methods(functions)
class Student:
    def __init__(self,a,b): # constructor
        self.name = a
        self.subject = b

    def display(self): # call manually
        print(f" Name : {self.name}, Subject : {self.subject}")

x = Student("Mohan","Python")
x.display()
