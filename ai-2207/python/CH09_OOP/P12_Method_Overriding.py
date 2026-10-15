class Animal:
    def sound(self):
        print("Animal makes a sound")
class Cat(Animal):
    def sound(self):
        print("Cat meows")
# Creating object
c = Cat()
# Calling method
c.sound()
