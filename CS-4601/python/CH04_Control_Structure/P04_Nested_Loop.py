# Multiplication Table 
for i in range(1, 6):
    for j in range(1, 6):
        print(i * j, end=" ")
    print()

# Pattern Printing
rows = 4
for i in range(1, rows + 1):
    for j in range(i):
        print("*", end=" ")
    print()

# Nested while Loops
i = 1
while i <= 3:
    j = 1
    while j <= 3:
        print(i, j)
        j += 1
    i += 1 
    
    
# Combining Nested Loops and Conditionals
for i in range(1, 4):
    for j in range(1, 4):
        if (i * j) % 2 == 0:
            print(i * j, end=" ")
        else:
            print("-", end=" ")
    print()
