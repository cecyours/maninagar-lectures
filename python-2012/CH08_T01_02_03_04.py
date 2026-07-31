

try:
    a = int(input("Enter a number : "))
    b = int(input("Enter a number : "))
    c = a/b
except ValueError as e:
    print("ERROR ",e)
except ZeroDivisionError:
    print("you can't divide by ZERO")
else:
    print("result is",c)
finally:
    print("program completed !!")

