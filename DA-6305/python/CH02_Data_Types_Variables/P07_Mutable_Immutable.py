# Integer
x = 10
print("x id before:", id(x))
x += 5   # Modify x
print("x =", x)
print("x id after:", id(x))

# String 
name = "Mary"
print("name id before:", id(name))
name += " Doe"  # Concatenate
print(name)
print("name id after:", id(name))

# List  
numbers = [1, 2, 3]
print("numbers id before:", id(numbers))
numbers.append(4)  # Modify list
print(numbers)
print("numbers id after:", id(numbers))

# Dictionary 
student = {"name": "Mary", "age": 20}
print("student id before:", id(student))
student["age"] = 21  # Modify value
print(student)
print("student id after:", id(student))

# Mutable vs Immutable in Functions
def modify_list(lst):
    lst.append(100)
def modify_number(n):
    n += 50
    return n
my_list = [1, 2, 3]
my_num = 10
modify_list(my_list)
my_num = modify_number(my_num)
print("List after modification:", my_list)  # Original list changed
print("Number after modification:", my_num) # Original number not changed unless reassigned