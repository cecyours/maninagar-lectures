
# array 

fruits = ["mango","apple","cherry","banana","Orrange"]

# index
print(fruits[0]); # manog
print(fruits[-1]) # last

# slicing
print(fruits[1:4])


print(fruits)

while True:
    data = input("Enter the new Fruit name (exit() for exit) : ")
    if data=="exit()":
        break;
    fruits.append(data)
    print("inserted ",data)

print(fruits);

s = set(fruits)

print(s)
