
# aa apdo data che
username_db = "AdM"
password_db = "123"

a = input("Enter your username : ") # user data

if username_db.lower()==a.lower():
    print("user name found")
    x = input("Enter your password : ")
    if password_db==x:
        print("welcome")
    else:
        print("invalid password")
else:
    print("invalid username")
