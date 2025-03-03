
from abc import ABC,abstractmethod


class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass
    
    @abstractmethod
    def walk(self):
        pass
    

class Dog(Animal):
    def speak(self):
        print("Bark")
    
    def walk(self):
        print("Dog is walking")
    
d = Dog();

d.speak()
d.walk()