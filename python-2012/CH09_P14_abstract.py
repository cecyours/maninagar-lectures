from abc import ABC, abstractmethod # abc = abstract base(parent) class

class Rule(ABC):

    @abstractmethod
    def display(self):
        print("hello Rule !!")
        pass

class Person(Rule):
    def __init__(self):
        print("hhhhhhh")
    def info(self):
        print("Hello")

    def display(self):
        print("Hello Person")

p = Person()

p.info()
p.display()