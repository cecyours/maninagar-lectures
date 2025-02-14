
import threading

def wish(name,*args):
    print(name,*args)

t1 = threading.Thread(target=wish,args=("Kites",1))
t2 = threading.Thread(target=wish,args=("Kites",1,2,3))

t1.start()
t2.start()

t1.join()
t2.join()

print("We played well");