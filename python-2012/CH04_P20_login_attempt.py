
default_password = "123"
attemp = 3

while attemp > 0 :
    p = input(f"{attemp}/3 Enter your password : ")
    
    if default_password==p:
        print("login success")
        break
    attemp -=1

