import pandas as pd
import uuid

data = pd.read_csv("./assets/users.csv")

def generate_id():
    x = uuid.uuid1()
    return x

def check_user(username):
    if username in data["username"].values:
        return True
    return False

def sign_up():
    global data

    is_available = False
    while not is_available:
        username = input("enter your username : ")
        is_available = not check_user(username)
    password = input("Enter password ")
    email = input("Enter email ")

    temp_data = pd.DataFrame([{"id":generate_id(),"username":username,"password":password,"email":email}])
    data = pd.concat([data,temp_data],ignore_index=True)

def sign_in():
    pass

print("1 for sign up..")
print("2 for sign in..")
choice = int(input("Enter your choice : "))

if choice==1:
    sign_up()
elif choice==2:
    sign_in()

data.to_csv("./assets/users.csv", index=False)