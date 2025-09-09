
data = [{"rollno":2,"name":"Gk","marks":19,"subject":"Python"},
        {"rollno":1,"name":"mohan","marks":19,"subject":"Java"},
        {"rollno":2,"name":"Radha","marks":26,"subject":"Basic"},
        {"rollno":3,"name":"Gopal","marks":12,"subject":"Shell"},
        {"rollno":4,"name":"Manish","marks":66,"subject":"Ruby"},
        {"rollno":5,"name":"Joy","marks":78,"subject":"javascript"}]

# print(data)
print("{:^3}|{:^15}|{:^5}|{:^15}".format('#','name','marks','subject'))
print("{:^3}+{:^15}+{:^5}+{:^15}".format('-','----','-----','-------'))

for i in data:
    print("{:^3}|{:^15}|{:^5}|{:^15}".format(i['rollno'],i['name'],i['marks'],i['subject']))