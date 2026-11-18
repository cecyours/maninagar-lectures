a = 10 
b = 3.14 
c = "Python" 
d = True 

print("Type of a:", type(a))
print("Type of b:", type(b))
print("Type of c:", type(c))
print("Type of d:", type(d))


x = 10.75
y = "20"

x_int = int(x)
print("x:", x, "-> x_int:", x_int)

y_int = int(y)
print("y:", y, "-> y_int:", y_int)

a = 10
b = "15.5"

a_float = float(a)
print("a:", a, "-> a_float:", a_float)

b_float = float(b)
print("b:", b, "-> b_float:", b_float)

num = 50
pi = 3.1416
flag = True

print(str(num), type(str(num)))
print(str(pi), type(str(pi)))
print(str(flag), type(str(flag)))

a = 0
b = 10
c = ""
d = "Python"
print(bool(a)) 
print(bool(b)) 
print(bool(c)) 
print(bool(d))

# Implicit Type Conversion
a = 5
b = 3.2
result = a + b
print(result, type(result))

# Explicit Type Conversion
a = "100"
b = "20"
sum_value = int(a) + int(b)
print("Sum: ", sum_value, type(sum_value))

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

average = (num1 + num2 + num3) / 3

print(f"The average of {num1}, {num2}, and {num3} is {average:.2f}")