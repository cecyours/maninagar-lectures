
initial_balance = 1000

try:
    amount = float(input("Enter your amount : "))
    if initial_balance<amount:
        raise Exception("User entered too many value..")
    initial_balance -=amount
    print("Amount : ",amount)
    print("initial_balance : ",initial_balance)
except Exception as e:
    print("Msg ",e)