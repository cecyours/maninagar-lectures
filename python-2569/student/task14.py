from array import array as arr

x = arr('f',[2.1,2.2,2.3,2.4,2.5,2.6])

print(x)

for f in x:
    print(f,f*f)

print("Data:- ",len(x))