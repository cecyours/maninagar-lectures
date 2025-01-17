

class Task:
    def __init__(self):
        self.id = 20
        self._id = 200;
        self.__id = 2000 # private

    def display(self):
        print("Hello Pvt : ",self.__id)

t = Task()

print(t.id)
print(t._id)
t.display()
# print(t.__id)