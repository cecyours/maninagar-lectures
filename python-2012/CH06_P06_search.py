
data = [1,2,3,4,5,6,7,8,9,0]

x = int(input("Enter a number : "))
if x in data:
    print("Found")
else:
    print("Not Found") 

print("------------------")

movies = ["Hulk","Spider man","Iron man","Avengers"]

m = input("Enter your fav. movie ")

if m in movies:
    print("your movie found")
else:
    print("Not available")

x = movies.index(m)
print(f"position of {x}")