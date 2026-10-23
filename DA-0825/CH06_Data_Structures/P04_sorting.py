# Sorting 
# sort()
numbers = [20, 50, 40, 30, 10]
numbers.sort()
print("Sorted list:", numbers)

numbers = [20, 50, 40, 30, 10]
numbers.sort(reverse=True)
print("descending Sorted list:", numbers)

# sorted()
numbers = [6, 3, 7, 1, 2, 9, 4]
sorted_list = sorted(numbers)
print("Original list:", numbers)
print("sorted list:", sorted_list)

# Searching
# in operaotr
numbers = [10, 20, 30, 40]
if 90 in numbers:
    print("Element found in the list")
else:
    print("not found")
    
# index()
fruits = ["apple", "banana", "mango", "orange"]
position = fruits.index("mango")
print("Position of mango", position)


# Iterating
#  for Loop
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)
    
numbers = [10, 20, 30, 40]
for i in range(len(numbers)):
    print("Index: ", i, "value:", numbers[i])
    
    
# while
numbers = [5, 10, 15, 20]
i = 0
while i < len(numbers):
    print(numbers[i])
    i = i + 1