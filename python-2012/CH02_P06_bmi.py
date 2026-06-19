
name = input("Enter your name : ")
w = float(input("Enter your weight : "))
h = float(input("Enter your height : "))

bmi = w/(h**2)

if bmi < 18.5:
    print(f" {name}, you r  underweight")
elif 18.5 <= bmi < 25:
    print(f"{name}, you r normal")
else:
    print(f"{name}, you are overweight")