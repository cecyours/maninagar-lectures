
class Library:
    def info(self):
        print("i am here with id : ",self)


class Book(Library):
    def __init__(self,name): 
        self.name = name

    def display(self):
        print("hello here, i'm ",self.name)
        super().info()

b = Book("kites")
b.display()
