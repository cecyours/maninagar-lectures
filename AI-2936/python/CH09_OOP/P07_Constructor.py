# Default Values

class Car:
    def __init__(self, brand = "Unknown"):
        self.brand = brand
    def show(self):
        print("Brand: ", self.brand)
        
c1 = Car()
c2 = Car("Toyoto")
c3 = Car("Tata")
c4 = Car()
c1.show()
c2.show()
c3.show()
c4.show()
        