#if
age = 20
if age >= 18:
    print("You are eligible to vote.")
    
#if-else
number = 7
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")
    
    
#else-if
marks = 82
if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 50:
    print("Grade C")
else:
    print("Fail")
    
#nested-if
age = 25
citizen = True
if age >= 18:
    if citizen:
        print("Eligible to vote")
    else:
        print("Not a citizen")
else:
    print("Underage")
    
#Ternary Expression
a = 15
b = 20
maximum = a if a > b else b
print("Maximum value:", maximum)
    
#Logical Operators
age = 22
income = 35000
if age > 18 and income > 30000:
    print("Loan approved")
else:
    print("Loan rejected")