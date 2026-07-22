filename = "./assets/hello.bin"

with open(filename,"rb") as file : # with file closes auto.
    context = file.read()
    print("data : ",context)