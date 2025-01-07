
s1 = ["Python","Java","Html"]
s2 = s1 # alias

s1[0]="Kotlin"
print("s1 : ",s1)
print("s2 : ",s2)


s3= s1[::] # clone
s1[0]="Mohan Lal"
print("s1 : ",s1)
print("s3 : ",s3)
