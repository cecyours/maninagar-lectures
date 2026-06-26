
marks = float(input("Enter your marks : "))

if marks>80 and marks<=100:
    print("A")
elif marks>70 and marks<=80:
    print("B")
elif marks>60 and marks<=70:
    print("C")
elif marks>50 and marks<=60:
    print("D")
elif marks>32 and marks<=50:
    print("F")
elif marks>100 or marks<0:
    print("marks are invalid")
else:
    print("Better luck next time !")