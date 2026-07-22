name = ""
pin = ""
balance = 0.0
statement = "No Transactions"


def create_account():
    global name, pin, balance, statement

    name = input("Enter Name: ")
    pin = input("Create PIN: ")
    balance = 0
    statement = "Account Created"

    print("Account Created Successfully.")


def deposit():
    global balance, statement

    amount = float(input("Enter Deposit Amount: "))
    balance = balance + amount
    statement = "Deposited ₹" + str(amount)

    print("Deposit Successful.")


def withdraw():
    global balance, statement

    amount = float(input("Enter Withdraw Amount: "))

    if amount <= balance:
        balance = balance - amount
        statement = "Withdrawn ₹" + str(amount)
        print("Withdrawal Successful.")
    else:
        print("Insufficient Balance.")


def transfer():
    global balance, statement

    amount = float(input("Enter Transfer Amount: "))

    if amount <= balance:
        balance = balance - amount
        statement = "Transferred ₹" + str(amount)
        print("Transfer Successful.")
    else:
        print("Insufficient Balance.")


def balance_inquiry():
    print("Current Balance:", balance)


def mini_statement():
    print("Mini Statement:")
    print(statement)
    print("Current Balance:", balance)


def change_pin():
    global pin

    old_pin = input("Enter Old PIN: ")

    if old_pin == pin:
        pin = input("Enter New PIN: ")
        print("PIN Changed Successfully.")
    else:
        print("Wrong PIN.")


while True:
    print("\n===== Bank Management System =====")
    print("1. Create Account")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Transfer Money")
    print("5. Balance Inquiry")
    print("6. Mini Statement")
    print("7. Change PIN")
    print("8. Exit")

    choice = int(input("Enter Choice: "))

    if choice == 1:
        create_account()

    elif choice == 2:
        deposit()

    elif choice == 3:
        withdraw()

    elif choice == 4:
        transfer()

    elif choice == 5:
        balance_inquiry()

    elif choice == 6:
        mini_statement()

    elif choice == 7:
        change_pin()

    elif choice == 8:
        print("Thank You!")
        break

    else:
        print("Invalid Choice")