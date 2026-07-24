
f_name = "./assets/data.txt"

with open(f_name,"w+") as file:
    msg = "Hello Good morning !!"
    file.write(msg)
    file.seek(0)
    content = file.read()
    print("DATA : ",content)
