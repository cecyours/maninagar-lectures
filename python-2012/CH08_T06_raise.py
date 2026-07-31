
num = int(input("Enter a number : "))
try:
    if num<0:
        raise ValueError("-ve number found")
    
except ValueError as e:
    print('msg : ',e)
else:
    print("you did great !!")
