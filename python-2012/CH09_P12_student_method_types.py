

class Student:
    school_name = "CEC" # class variable

    def __init__(self,name):
        self.name = name # instance variable

    def display(self):
        print(f"i am {self.name} {self.school_name}")

    @classmethod
    def info(cls):
        print(f"{cls.school_name}")

s1 = Student("Mohit")
s2 = Student("Mohan")

s1.display()
s2.display()

Student.info()
    
