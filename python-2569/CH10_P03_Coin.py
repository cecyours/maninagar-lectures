
class Level:
    def __init__(self,coin):
        self.coin = coin
        
    def __add__(self,other):
        return Level(self.coin+other.coin)

l1 = Level(10)
l2 = Level(20)

l3 = l1+l2

print("l1 :",l1.coin)
print("l2 :",l2.coin)
print("l3 :",l3.coin)