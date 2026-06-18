name = "John"
age = 30

print("name : ",name,", age : ",age)

print(f"name is {name}, age is {age}")

x = 30
y = 20
z = x+y
print(f"{x} + {y} = {z}")

name = "Mohan"
roll_no=20
date = "01/06/2026"

print("Hello {}, your roll no is {}, your batch on {}".format(name,roll_no,date)) # method 1
print(f"Hello {name}, your roll no is {roll_no}, your batch on {date}") # method 2
print("Hello "+name+", your roll no is "+str(roll_no)+", your batch on "+date) # mothod 3