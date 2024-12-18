import array

a = array.array('i',[12,22,3,4,45,65,7,5,7,8,9,10])
print(a)

a.append(13)
print(a)

a.pop()
print(a)

a.reverse()
print(a)

a.remove(9)
print(a)

b = a.count(7)
print(b)