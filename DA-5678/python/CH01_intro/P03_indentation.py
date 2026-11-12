# Case Sensitivity
Var = 10
var = 2
print(Var)
print(var)

# Statement
x = 10
y = x + 10
print(y)

# End of Statement
a = 12; b = 10; print(a + b)

# Indentation 

num = 11
if num > 0:
    print("Positive...")
    print("inside if block...")
    if num > 10:
        print("hello")
print("outside if block")

# loop

for i in range(1, 11):
    print("Iteration: ", i)
    print("Inside loop")
print("loop end")

# Odd-even

num = int(input("Enter a number: ")) 
if num % 2 == 0:
    print("Even")
else:
    print("Odd")