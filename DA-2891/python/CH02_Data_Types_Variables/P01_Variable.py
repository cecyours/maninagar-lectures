name = "Dharmik"
age = 22
height = 5.9
is_student = True

print("Name: ", name)
print("Age: ", age)
print("Height: ", height)
print("Is Student ", is_student)


# integer
num1 = 10
num2 = -10
num3 = 0

print(num1, type(num1))
print(num2, type(num2))
print(num3, type(num3))

# float
price = 90.56
temperature = -9.78
print(price, type(price))
print(temperature, type(temperature))

# string

name = "Dharmik"
greeting = "Hello, World!"
print(name, type(name))
print(greeting, type(greeting))

# boolean
is_student = True
has_license = False

print(is_student, type(is_student))
print(has_license, type(has_license))

# Type Conversion
num = 10.89
num_int = int(num)
print(num, "->", num_int)

num2 = 89
num_float = float(num2)
print(num2, "->", num_float)

age = 20
age_str = str(age)
print(age, "->", age_str, type(age_str))

# Program to calculate BMI (Body Mass Index)
name = input("Enter your name: ")
weight = float(input("Enter your weight in kg: "))
height = float(input("Enter your height in meters: "))
# BMI calculation
bmi = weight / (height ** 2)
print(f"{name}, your BMI is {bmi:.2f}")
# Check BMI category
if bmi < 18.5:
    print("You are underweight.")
elif 18.5 <= bmi < 25:
    print("You have a normal weight.")
else:
    print("You are overweight.")