import re

s = "Hello User, im admin";

obj = re.search("^H",s);
print(obj)


obj = re.findall("i",s)
print(obj)


students = [{"name":"gk","status":"passed"},{"name":"mohan","status":"failed"},{"name":"mohan","status":"pending"}]

for i in students:
    x = re.search("passed|failed",i["status"])
    if(x):
        print(i)