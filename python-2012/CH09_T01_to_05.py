
class Student:
    # class variable
    subject_name = "Python" # share the same data

    def __init__(self,name,marks):
        self.name = name # instance variable
        self.marks = marks # instance method


    def display(self): # instance method
        print(f"   name : {self.name}") 
        print(f"subject : {self.subject_name}") # class variable 
        print(f"  marks : {self.marks}") 
        print("--------------------")

    @classmethod
    def info(cls):
        print("this is only for class to access class variable")
        print("that is",cls.subject_name)
        # print("that is",cls.name)

    @staticmethod
    def meta():
        print("alway could run...")

s1 = Student("Mohan",35)
s2 = Student("Neha",87)

s1.display()
s2.display()

Student.info()

Student.meta() # class 
s1.meta() # instance