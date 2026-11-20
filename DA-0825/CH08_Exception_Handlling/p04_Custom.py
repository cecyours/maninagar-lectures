# Creating and Raising a Custom Exception

class InvalidAgeError (Exception):
    pass
age = int(input("Enter age:"))

if age <  18:
    raise InvalidAgeError("Age must be 18 or above")
print("You are eligible")

# Handling Custom
class InvalidAgeError (Exception):
    pass
try:
    
    age = int(input("Enter age:"))

    if age <  18:
        raise InvalidAgeError("Age must be 18 or above")
    print("Access granted")
except InvalidAgeError as e:
    print("Error:", e)
    
