
filename = "./CH10_assets/student.txt"

records = []
with open(filename,"r") as file:
    for line in file:
        data = line.split(",")
        name = data[0].strip()
        rollno = data[1].strip()
        mobile = data[2].strip()
        div = data[3].strip()

        print(f"{name},{rollno},{mobile},{div}")
        records.append({"name":name,"rollno":rollno})

print("-----------------")
# print(records)
for i in records:
    print(i)