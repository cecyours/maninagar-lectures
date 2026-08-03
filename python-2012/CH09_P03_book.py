
class Book():
    def __init__(self,id,name,price):
        self.id = id
        self.name = name
        self.price = price

    def display(self):
        print(f"   id : {self.id}")
        print(f" name : {self.name}")
        print(f"price : {self.price}")

x = Book("I2001","Harry Potter",3999)

x.display()