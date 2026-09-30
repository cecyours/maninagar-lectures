class Student:
    # constructor method
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    # method
    def display(self):
        print("Name: ", self.name) 
        print("Age: ", self.age)
# object create
s1 = Student("Ridham", 22)

# calling method
s1.display() 