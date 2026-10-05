# integer

num1 = 10
num2 = -10
num3 = 0
print(num1, type(num1))
print(num2, type(num2))
print(num3, type(num3))

# float

price = 100.900
temperature = -6.7
print(price, type(price))
print(temperature, type(temperature))

# String
name = "yash"
greeting = 'Hello World!'
print(name, type(name))
print(greeting, type(greeting))

# Bool
is_student = True
has_license = False
print(is_student, type(is_student))
print(has_license, type(has_license))

# Type Conversion
# float to integer

num = 10.05
num_int = int(num)
print(num, "->", num_int)

# integer to float
num2 = 3
num_float = float(num2)
print(num2, "->", num_float)

# number to string
age = 22
age_str = str(age)
print(age, "->", age_str, type(age_str))

# data type in program
name = input("Enter Your name: ")
weight = float(input("Enter your weight in kg: "))
height = float(input("Enter your height in meters: "))

# BMI calculation

bmi = weight / (height ** 2)

print(f"{name}, your BMI is {bmi : .2f}")

# check
if bmi < 18.5:
    print("you are underweight")
elif 18.5 <= bmi < 25:
    print("You have a normal weight")
else:
    print("You are overweight")