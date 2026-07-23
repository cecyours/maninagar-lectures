from datetime import datetime

def store_log():
    with open("./assets/user.log","a") as file:
        now = datetime.now()
        file.write(f"{now} : user typed something...\n")

filename = "./assets/user.txt"

name = input("Enter your name : ")
email = input("Enter your email : ")


with open(filename,"a+") as user_file:
    user_file.write(f"name : {name}, email : {email}\n")
    store_log()
    print("record saved...")
    print("full data : ")
    user_file.seek(0)
    data = user_file.read()
    print(data)

