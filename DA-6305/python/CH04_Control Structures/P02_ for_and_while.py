# Iterating Through a Range

for i in range(5):
    print(i)
    
# Iterating Through a List

fruits = ["Apple", "Banana", "Mango"]
for fruit in fruits:
    print(fruit)
    
# Iterating Through a String

word = "Python"
for letter in word:
    print(letter)
    
# The range() Function in for Loops
# range(stop)
# range(start, stop)
# range(start, stop, step)

for i in range(1, 10, 2):
    print(i)
    
# while Loop

count = 1
while count <= 5:
    print(count)
    count += 1
    
# Using While Loop for User Input

number = 0
while number != 5:
    number = int(input("Enter number (5 to stop): "))
    
# Nested Loops
for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)

# break    
for i in range(10):
    if i == 5:
        break
    print(i)
    
# continue
for i in range(5):
    if i == 2:
        continue
    print(i)

# Infinite Loops 
# while True:
#     print("Running...")
