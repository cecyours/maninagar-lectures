
data = {"saver": 11, "flex": 7, "plus": 4}

print(type(data))

for key,values in data.items():
    print(f"{key} : {values}")

data['youth'] = 2

for key,values in data.items():
    print(f"{key} : {values}")


