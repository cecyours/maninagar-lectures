class Account:
    def __init__(self, balance):
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
    def show_balance(self):
        print("Balance:", self.balance)
        
acc = Account(20000)
acc.deposit(1900)
acc.show_balance()
        
        