data = [{'name': 'rohan', 'marks': 50}, {'name': 'sohan', 'marks': 60}, {'name': 'mohan', 'marks': 30, "name": "gohan", "marks": 70}, {'name': 'karan', 'marks': 80}, {'name': 'taran', 'marks': 90}]

for  i in data:
    print(i["name"],i["marks"])
    

m = int(input("Enter the marks : "))

for i in data:
    if i['marks']>m:
        print(i['name'])