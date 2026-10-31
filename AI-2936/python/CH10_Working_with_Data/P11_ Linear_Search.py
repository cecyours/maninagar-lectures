numbers = [10, 25, 30, 45, 50]
target = 30
found = False

for i in range(len(numbers)):
    if numbers[i] == target:
        print("Element found at index:", i)
        found = True
        break
if not found:
    print("Element not found")