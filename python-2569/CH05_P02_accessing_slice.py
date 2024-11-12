#          "01234567"
username = "0123456789"


#  access
print(username[0]) # 0 index, h 
print(username[2]) # 2 index, r
print(username[-1]) # 1 from last 
print(username[-2]) # second last
print(username[-5])


# slice
# start:end:*step
print(username[2:]) # onward 2nd index
print(username[2:5]) # 2-4
print(username[1::2]) # skip 1 character 
print(username[::3]) # from beginning to end step by 3
print(username[4:0:-2])

print(username[::-1])