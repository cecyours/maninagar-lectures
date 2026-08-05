# Mutable Types:
# list → Lists
# dict → Dictionaries
# set → Sets
# bytearray → Mutable byte sequences

# List
numbers = [1, 2, 3]
print("numbers id before:", id(numbers))
numbers.append(4) # Modify list
print(numbers)
print("numbers id after:", id(numbers))

# Dictionary 
student = {"name": "Mary", "age": 20}
print("student id before:", id(student))
student["age"] = 21 # Modify value
print(student)
print("student id after:", id(student))


# Mutable vs Immutable 
def modify_list(lst):
    lst.append(100)
def modify_number(n):
    n += 50_
    return n
my_list = [1, 2, 3]
my_num = 10
modify_list(my_list)
my_num = modify_number(my_num)
print("List after modification:", my_list)
print("Number after modification:", my_num) 
