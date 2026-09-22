numbers = [10, 20, 30, 20, 40, 10, 50]
unique_numbers = set(numbers)
print("Original List:", numbers)
print("After Removing Duplicates:", unique_numbers)

# Converting Back to a List
numbers = [10, 20, 30, 20, 40, 10, 50]
unique_numbers = list(set(numbers))
print("List after removing duplicates:", unique_numbers)

# Removing Duplicates from a String
text = "programming"
unique_characters = set(text)
print("Original String:", text)
print("Unique Characters:", unique_characters)

# Removing Duplicates While Preserving Order
numbers = [10, 20, 30, 20, 40, 10, 50]
unique_list = []
seen = set()
for num in numbers:
    if num not in seen:
        unique_list.append(num)
        seen.add(num)
print("Original List:", numbers)
print("List without duplicates:", unique_list)