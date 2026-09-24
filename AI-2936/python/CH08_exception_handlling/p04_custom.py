#  Creating and Raising a Custom Exception
class InvalidAgeError(Exception):
    pass
age = int(input("Enter your age: "))
if age < 18:
    raise InvalidAgeError("Age must be 18 or above.")
print("You are eligible.")

# Handling a Custom Exception
class InvalidAgeError(Exception):
    pass
try:
    age = int(input("Enter your age: "))
    if age < 18:
        raise InvalidAgeError("Age must be 18 or above.")
    print("Access granted.")
except InvalidAgeError as e:
    print("Error:", e)

# Custom Exception with Constructor
class InsufficientBalanceError(Exception):
    def __init__(self, balance, withdrawal):
        self.balance = balance
        self.withdrawal = withdrawal
        super().__init__("Insufficient balance for withdrawal")
balance = 5000
withdraw = 7000
if withdraw > balance:
    raise InsufficientBalanceError(balance, withdraw)
