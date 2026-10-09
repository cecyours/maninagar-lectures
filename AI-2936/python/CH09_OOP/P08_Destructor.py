class Demo:
    def __init__(self):
        print("Object created")
    def __del__(self):
        print("Object Destroyed")
        
d = Demo()
del d


