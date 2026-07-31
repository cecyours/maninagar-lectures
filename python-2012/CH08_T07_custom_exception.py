
class MinorException(Exception):
    pass

age = int(input("Enter a ur age : "))

try:
    if age<18:
        raise MinorException("you are not eligble")
    print("HELLO")
except MinorException as e:
    print(e)