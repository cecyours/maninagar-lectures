# Components of Complex Expressions

a = 5
b = 10
c = 2
d = 8
result = (a + b) * c ** 2 // d - (b % c)
print("Result:", result)

# Combining Logical and Comparison Operators

x = 15
y = 10
z = 20
result = (x > y and x < z) or (y == z)
print("Result:", result)

# Simplifying Expressions
a = 5
b = 10
c = 2
d = 8
step1 = (a + b)
step2 = c ** 2
step3 = step1 * step2
step4 = step3 // d
mod = b % c
result = step4 - mod
print("Result:", result)

# Using Functions to Simplify

def compute_expression(a, b, c, d):
    return ((a + b) * (c ** 2) // d) - (b % c)
result = compute_expression(5, 10, 2, 8)
print("Result:", result)

x = 10
y = 20
max_value = x if x > y else y
print("Maximum:", max_value)
