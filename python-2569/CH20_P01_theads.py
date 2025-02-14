import threading
import time
import random
def chess():
    for i in range(10):
        print("Let play Chess")
        time.sleep(random.randint(1,2))

def criket():
    for i in range(10):
        # print("Let play Chess")
        print("Lets play Cricket")
        time.sleep(random.randint(1,3))


# chess()
# criket()

t1 = threading.Thread(target=chess,name='t1')
t2 = threading.Thread(target=criket,name='t2')

t1.start()
t2.start()

t1.join()
t2.join()

print("We played well");