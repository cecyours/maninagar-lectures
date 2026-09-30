class Account:
    def __init__(self, balance):
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
    def show_balance(self):
        print("Balance:", self.balance)
acc = Account(1000)
acc.deposit(500)
acc.show_balance()