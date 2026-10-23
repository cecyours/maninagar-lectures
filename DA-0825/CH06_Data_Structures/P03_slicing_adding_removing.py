# Slicing
numbers = [10, 20, 30, 40, 50, 60]
print("Original List:", numbers)
print("Elements from index 1 to 4:",numbers[1:5])
print("First three elements:",numbers[:3])
print("Elements from index 3 to end:", numbers[3:])
print("Every second element:", numbers[::2])

# Adding Elements
# extend()
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)
print("After extend:", list1)

# Removing
# del
numbers = [5, 10, 15, 20]
del numbers[1]
print("List after deleting element:", numbers)