class Student:
    def __init__(self,name):
        self.name = name
        print(f"ne object created {self.name}",self)

    def display(self):
        print(f"welcome {self.name}")

x= Student("Props")
x.display()

y= Student("Kites")
y.display()

