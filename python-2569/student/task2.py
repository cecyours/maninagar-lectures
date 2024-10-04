marks = int(input("Enter your marks:- "))

if marks>=90 and marks<=100:
    print("A+ Grade")
    
elif marks>=80 and marks<90:
    print("A Grade")

elif marks>=70 and marks<80:
    print("B+ Grade")
    
elif marks>=60 and marks<80:
    print("B Grade")
    
elif marks>=50 and marks<60:
    print("C+ Grade")
    
elif marks>=40 and marks<50:
    print("C Grade")
       
else:
    print("Failed")