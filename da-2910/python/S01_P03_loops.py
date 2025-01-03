
name = "Apple"
# start:end:step
for i in range(1,100,5):
    print(i,name,end=" | ")


students = ["Denver","Mosco","Berlin","Nairobi","Tokyo"]

print()
srno = 0
for i in students:
    srno+=1
    print(srno,(i+"_")*srno)