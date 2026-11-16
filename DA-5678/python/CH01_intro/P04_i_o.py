name = "Jay"
age = 22
print("Name:", name, "Age:", age)

# formatting 
# f-string

name = "jay"
age = 20

print(f"My name is {name} and i am {age} years old...")

name = "jay"
age = 20


print("My name is {} and i am {} years old..".format(name, age))

# concatenation

name = "Jay"
age = 22
print("My name is " + name + " and i am " + str(age) + " years old...")\
    
# input and output in single line

num = int(input("Enter a number: "))
print(f"you entered {num}, and its square is {num ** 3}")


print("python", "is", "fun", sep= " | ", end= "!!!\n")