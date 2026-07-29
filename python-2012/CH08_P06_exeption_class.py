

class NagativeBalance(Exception):
    pass

balance = 50000

amount = int(input("Enter amount : "))

try:
    if amount>balance:
        raise NagativeBalance("amount is larger then balance")
    balance-=amount
    print("new balance ",balance)
except NagativeBalance as e:
    print(e)
finally:
    print("Completed")
