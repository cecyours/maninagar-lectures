
try:
    a = int(input("Enter a number : "))
    b = int(input("Enter a number : "))
    c = a/b
    print("result is ",c)
except ValueError:
    print("maybe user typed wrong values try [0-9] numbers")
except ZeroDivisionError:
    print("you can't devide with 0")
finally:
    print("this is finally block statements..")
    # use to free resouces.