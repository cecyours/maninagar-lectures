age = 20
if age >= 18:
    print("Eligible to vote..")
    

num = 10
if num %2 == 0:
    print("Even..")
else:
    print("odd..")


marks = 80
if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 50:
    print("C")
elif marks >= 33:
    print("D")
else:
    print("Fail")
    
    
age = 25
citizen = True

if age >= 18:
    if citizen:
        print("Eligible to vote...")
    else:
        print("Not a citizen..")
else:
    print("Underage")    
    


a = 15
b = 20
max = a if a > b else b
print("Maximum: ", max)

age = 22
income = 1200000
if age > 18 and income > 30000:
    print("Loan Approved")
else:
    print("Rejected")