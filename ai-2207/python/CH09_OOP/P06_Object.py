# Accessing Object Attributes

class Person:
    def __init__(self, name, city):
        self.name = name
        self.city = city
p1 = Person("Mary", "Ahmedabad")
print("Name:", p1.name)
print("City:", p1.city)


# Creating Multiple Objects
class Laptop:
    def __init__(self, brand, price):   
        self.brand = brand
        self.price = price
l1 = Laptop("Dell", 60000)
l2 = Laptop("HP", 55000)
l3 = Laptop("Asus", 65888)
l4 = Laptop("HP", 14022)
print(l1.brand, l1.price)
print(l2.brand, l2.price)
print(l3.brand, l3.price)
print(l4.brand, l4.price)
