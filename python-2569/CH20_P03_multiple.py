import threading
import time
import random
def wish(name):
    time.sleep(random.randint(1,3))
    print("Hello ",name)

data = ["Apple","Banana","cherry","mango"]

threads = []
for i in data:
    t= threading.Thread(target=wish,args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
print("Hello Worl.csdmvsdkj")