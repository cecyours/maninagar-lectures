
def xyz():
    print("1")

def loop():
    print("2")


print("A") # A
loop() # 2
loop() # 2
xyz() # 1 
print("B") # b
xyz() # 1
loop() # 2
print("C") # c



