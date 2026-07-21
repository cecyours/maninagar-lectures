
filename = "./assets/username.txt"

file = open(filename,"a+")

name = input("Enter your name : ")
file.write(f"name : {name}\n")

print(f"{name} is saved")
file.seek(5) # cursor reset krvu pde
print("all saved name")
content = file.read()
print(content)

file.close()