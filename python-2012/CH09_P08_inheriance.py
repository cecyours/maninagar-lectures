
class Animal: # parent class
    def speak(self):
        print("i can speak...")

class Cat(Animal): # child
    def drink(self):
        print("i can drink milk") 

cat = Cat()
cat.speak()
cat.drink()

dog = Animal()
dog.speak()
# dog.drink()