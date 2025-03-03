from CH09_P02_lib import Task

class A:
    def __init__(self,username): #contructor
        self.name = username
        print("Object is created")

    def display(self):
        print("Hello World : ",self.name)

x = A("Kites")
x.display();

print("Welcome : ",x.name)
