from CH09_T09_Bank import Bank

class Account(Bank):
    def __init__(self,name,balance):
        self.__name = name
        self.__balance = balance
        print(f"{self.__name} created with {self.__balance} !")

    def withdraw(self, amount):
        self.__balance = self.__balance - amount

    def deposit(self, amount):
        self.__balance = self.__balance+amount

    def display(self):
        print(f"log : {self.__name}  with {self.__balance} !")

a1 = Account("Mohit",4000)
a1.withdraw(500)
a1.deposit(500)
a1.display()

a1.withdraw(1400)
a1.display()
