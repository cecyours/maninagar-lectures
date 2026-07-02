x = int(input("Enter a number "))
y = int(input("Enter a number "))
z = int(input("Enter a number "))


if x>y and x>z:
    print(f"x : {x} is max")
elif y>x and y>z:
    print(f"y : {y} is max")
else:
    print(f"z : {z} is max")

