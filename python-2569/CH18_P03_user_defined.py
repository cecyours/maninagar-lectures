
pss = input("Enter password : ")

try:
    if(pss != "123"):
        raise ValueError("Password sahi nahi hai!")
except ValueError as e:
    print("ERROR: ",e)

