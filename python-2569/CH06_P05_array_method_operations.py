
import array

a = array.array('i',[12,34,56,78,90,9,87,65,43,21,12,38,90])

print(a)
a.append(100)
print(a)
a.pop(2) # delete by index
print(a)
a.remove(65) # delete by element
print(a)

a.reverse()
print(a)


# b = array.array('i',[12,3,4,5,67,8,90,9,87,65,43,2,1])
b = a.count(90)
print(b)


