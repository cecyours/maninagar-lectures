file1name = "./assets/user.txt"
file2name = "./assets/students.txt"


try: 
    with open(file1name,"r") as user_file:
        data = user_file.read()

    with open(file2name,"w") as student_file:
        student_file.write(data)

    print(f"{file1name} copied into {file2name}")
    
except FileNotFoundError:
    print("file name not found please check again !!")


