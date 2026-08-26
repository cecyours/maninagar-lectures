# advance discount system
price = int(input("enter the price of item: "))
membership = input("are you member of our store? (yes/no): ")
coupon = input("do you have a coupon? (yes/no): ")

membership_discount = price*0.20

discount =0

if price >=5000:
    
    discount += 10
    print("Shopping discount is 10%", price * 0.10)
    
    if membership.lower() == "yes": 
        discount += 20 
        print("your discount is 20%" , membership_discount)
       
        if coupon.lower() == "yes":
            discount += 10
            print("your discount is 10%" , (price * 0.10))
            
        else:
            print("sorry, you don't have a coupon")

else:    print("sorry you can't apply for discount") 

final_price = price - (price * discount / 100)

print("final price after discount:", final_price)