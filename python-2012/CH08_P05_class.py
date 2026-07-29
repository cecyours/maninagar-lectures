
class Student:
    data = 100

    def show(self,new_value):
        self.data = new_value
        print("this is not me")

x = Student()
print(x.data)
x.show(30)
print(x.data) # 30

y = Student()
print(y.data)
y.show(450)
print(y.data) # 450

print(x.data) # 30