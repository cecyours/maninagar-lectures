# Natural Numbers 

def sum_numbers(n):
    if n == 1:
        return 1
    else:
        return n + sum_numbers(n - 1)
result = sum_numbers(5)
print("Sum =", result)

# Fibonacci Series

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
for i in range(6):
    print(fibonacci(i))

# Mathematical
def power(base, exp):
    if exp == 0:
        return 1
    return base * power(base, exp-1)
print(power(2, 3))


# Tower of Hanoi
def hanoi(n, source, auxiliary, destination):
    if n == 1:
        print("Move disk 1 from", source, "to", destination)
        return
    hanoi(n-1, source, destination, auxiliary)
    print("Move disk", n, "from", source, "to", destination)
    hanoi(n-1, auxiliary, source, destination)
hanoi(3, "A", "B", "C")
