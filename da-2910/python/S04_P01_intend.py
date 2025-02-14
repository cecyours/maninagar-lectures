

password = '123'
username = 'kuch bhi'

inputUsername = input("Enter the UserName : ")
inputPassword = input("Enter the password : ")


# if(inputUsername==username):
#     if(inputPassword==password):
#         print("Wecome User")
#     else:
#         print("Incorrect password")
# else:
#     print("incorrect username")

if(username==inputUsername and password==inputPassword):
    print("Welcome user")
else:
    print("Incorrect username/password")
