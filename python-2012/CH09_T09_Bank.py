from abc import ABC,abstractmethod

class Bank(ABC):

    @abstractmethod
    def deposit(self,amount):
        pass
    @abstractmethod
    def withdraw(self,amount):
        pass