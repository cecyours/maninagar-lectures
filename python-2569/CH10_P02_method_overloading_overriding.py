

class Task:
    def _do(self): # method overriding
        print("init work")

class Todo(Task):
    
    def _do(self,title="",desc="N/A"): # method overloadint
        super()._do()
        if title and desc:
            print(f"{title}, {desc}")
        else:
            k =  title if title  else desc
            print(k)
     
t = Todo()
t._do()   
t._do("Hello Work")
t._do("home","lession")
            