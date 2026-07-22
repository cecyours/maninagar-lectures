
filename = "./assets/hello.bin"

file = open(filename,"bw")
data = b"Hello kites are awefull"
file.write(data)
file.close()

# for i in data:
#     print(i)
print("bin file created !!")