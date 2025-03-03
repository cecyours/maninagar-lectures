
import array as arr

a = arr.array('i',[10,20,30,40,50,60,70,80,90,100])

# indexing
print(a[0]) # accessing 1st element from the array

# indexing
print(a[3]) # accessing 4th


#indexing
print(a[-1])


# start:end:step

# slicing 
print(a[1:4]) # 1st to 4th element

# slicing 
print(a[::2]) # 0th to end with step of 2

# slicing
print(a[::-1]) # reverse the array

# slicing
print(a[1:5:3])