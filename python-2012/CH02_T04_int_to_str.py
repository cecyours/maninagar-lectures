

x = 40
s = str(x)

print(f"{x} int to {s} with type : {type(s)}")

y = 10

z = s+str(y) # str+int => str+str
print("with s : ",z)

z = x+y # int+int
print("with x : ",z)
