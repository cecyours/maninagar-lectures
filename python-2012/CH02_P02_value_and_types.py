
# int, float, str, bool

roll_no = 10 # int
marks = (80+50+30)/3 # float
name = "Master"
is_pass = marks>33

print(f"Roll No : {roll_no} , type: {type(roll_no)}")
print(f"  Marks : {marks} , type: {type(marks)}")
print(f"   Name : {name} , type: {type(name)}")
print(f"   Pass : {is_pass} , type: {type(is_pass)}")

print("---------------")

if is_pass:
    print("Hello")
else:
    print("Bye")