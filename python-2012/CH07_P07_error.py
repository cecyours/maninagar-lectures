
filename = "./assets/demo4.txt"

try:
    file = open(filename,"r")
    content = file.read()
    print("------------")
    print(content)
    print("------------")
    file.close()
except FileNotFoundError:
    print(f"{filename} File is not available")

print("visit again : CEC")