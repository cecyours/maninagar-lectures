
filename = "./assets/user.txt"

name = input("Enter your name : ")
email = input("Enter your email : ")

with open(filename,"a+") as file:
    file.write(f"name : {name}, email : {email}\n")
    file.seek(0)
    count = len(file.readlines())
    print("count is ",count)
    file.seek(0)
    for i in file.readlines():
        print("LINE : ",i,end="")
