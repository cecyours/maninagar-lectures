

class Task:
    
    @classmethod
    def m1(cls):
        print(cls)
    
    def m2(self): # instance method
        print(self)
    
    @staticmethod
    def m3(data):
        print("i am always ready ",data)


Task.m1() #classmethod

k = Task() 
k.m2() # instance

Task.m3("pip") # static