
a = 50
b = 0

try:
    b = int(input("Enter a number : "))
    if b<0:
        raise Exception("-ve not allowed")
    if b>50:
        raise ValueError("Invalid value")
    c = a/b
    print("Ans is",c)
except ZeroDivisionError:
    print("Zero division")
except Exception as new_name:
    print("issue : ",new_name)
except ValueError as v_e:
    print("value issue : ",v_e)
finally:
    print("COMPLETED")
