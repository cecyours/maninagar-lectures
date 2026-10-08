
def late_fee(days):
    return days*15

a = late_fee(0)
b = late_fee(2) # 30
c = late_fee(5) # 75

print("a : ",a)
print("b : ",b)
print("c : ",c)