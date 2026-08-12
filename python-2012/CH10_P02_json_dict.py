import json

with open("./CH10_assets/movies.json","r") as file:
    data = json.load(file)


# json_data= json.dumps(data,indent=5)
# print(data)

size = len(data)
print(f"there are {size} records")
rating = 0
max = data[0]["rating"]
for movie in data:
    print(movie["title"],movie['rating'])
    rating = rating+movie['rating']
    if max < movie['rating']:
        max=movie['rating']

print(f"Total rating : {rating:.2f}")

avg  = rating/size
print(f"Avg Rating : {avg:.2f}")

print("max rating : ",max)