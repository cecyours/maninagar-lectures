
num = 151
temp=num
reversed =0


while num>0:
    rem = num%10
    reversed = reversed*10+rem
    num = num//10
    print(f"rem :{rem}, reversed:{reversed}, new number : {num}")

if reversed==temp:
    print("pandrom")
else:
    print("not same..")
# print('num : ',temp)