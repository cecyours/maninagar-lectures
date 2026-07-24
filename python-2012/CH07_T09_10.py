
filename = "./assets/info.bin"

data = b"this is be good enough !!"

with open(filename,"wb") as file:
    file.write(data)
    print("data added !!")

with open(filename,"rb") as file:
    data = file.read()
    print(data)