
class NegativeBalance(Exception):
    pass

balance = 5000

amount = int(input("Enter the amount : "))

try:
    if amount>balance:
        raise NegativeBalance("amount is larger then balance")
except NegativeBalance as e:
    print("Error e : ",e)
else:
    balance = balance-amount
    print("new balance : ",balance)
finally:
    print("Program executed !!")