# Boolean Expressions
x = True
y = False
print(type(x))  # <class 'bool'>
print(type(y))  # <class 'bool'>

a = 10
b = 20
expr1 = a > b         # False
expr2 = a < b         # True
expr3 = (a < b) and (b > 15)  # True
expr4 = (a > b) or (b > 15)   # True
expr5 = not (a < b)           # False
print(expr1, expr2, expr3, expr4, expr5)

# AND Operator
for A in [True, False]:
    for B in [True, False]:
        print(f"A={A}, B={B}, A and B={A and B}")
        
# OR Operator
for A in [True, False]:
    for B in [True, False]:
        print(f"A={A}, B={B}, A or B={A or B}")
        
# NOT Operator
for A in [True, False]:
    print(f"A={A}, not A={not A}")

# Combining Boolean Operators

A = True
B = False
C = True
result = (A and B) or (not C)
print("Result:", result)

# Boolean Expressions in Conditional Statements
age = 25
income = 40000
if age > 18 and income > 30000:
    print("Eligible for loan")
else:
    print("Not eligible")