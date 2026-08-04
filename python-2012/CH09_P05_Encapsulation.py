

class Account:

    def __init__(self,name,balance):
        self.name = name
        self.balance = balance

    def deposit(self,amount):
        self.balance = self.balance + amount

    def withdraw(self,amount):
        self.balance = self.balance - amount

    def display(self):
        print("   Name : ",self.name)
        print("Balance : ",self.balance)


user1 = Account("Mohan",4000)
user1.deposit(500)
user1.display() # 4500

user1.withdraw(500)

user1.deposit(350)
user1.display()  # 4350

user2 = Account("Riya",0)
user2.deposit(5000)
user1.withdraw(500)

user2.display() # 5000

user1.display()