
import array as arr

# a = arr.array('i',[1,2,3,4,5,6,7,8,9,0])

# a.append(299)
# for i in a:
#     print(i,type(i))


n = int(input("Enter the number : "))
a = arr.array('i')
for i in range(n):
    x = int(input("Enter the element : "))
    a.append(x)

print(a)