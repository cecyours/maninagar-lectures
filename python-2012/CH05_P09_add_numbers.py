

def add_number(*a): # multiple variable using tuple
    s = 0
    for i in a:
        s = s+i
        print(f"{i:3} {s:3}")
    print(s)


add_number(10,50)
