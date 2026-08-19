
a = -1
b = 1

n = int(input("Enter nth number : "))

for i in range(n):
    c = a+b
    print(c)
    a = b
    b = c

