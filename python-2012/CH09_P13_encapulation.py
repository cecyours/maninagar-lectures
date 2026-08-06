
class Student:

    def __init__(self,name,marks):
        self.__name = name
        self.__marks = marks

    def display(self):
        print(self.__name)
        print(self.__marks)


s = Student("Mohan",89)
s.__name='Jiya'
print(s.__name)
s.display()