n1 = int(input("Enter the number : "))
n2 = int(input("Enter the number : "))
n3 = int(input("Enter the number : "))


if(n1>n2):
    if n1>n3:
        print(n1,"is max")
    else:
        print(n3,"is max")
else:
    if(n2>n3):
        print(n2,"is max")
    else:
        print(n3,"is max")