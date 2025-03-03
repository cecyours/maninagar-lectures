class level:
    def __init__(self,coin):
        print("I am coin",coin)
        self.coin = coin
    
    def __add__(self,other):
        n = self.coin+other.coin
        return level(n)

l1 = level(10)
l2 = level(20)

l3 = l1+l2

print("l1 :",l1.coin,type(l1))
print("l2 :",l2.coin,type(l2))
print("l3 :",l3.coin,type(l3))

