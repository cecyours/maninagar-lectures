
class A:
    def __init__(self):
        print("A created")

    def display(self):
        print("I am A with Display")

class B(A):
    def __init__(self):
        super().__init__()
        print("B created")

    def display(self):
        print("I Am B with Display")
        

b = B()
b.display()