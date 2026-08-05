
class Bird:
    def fly(self):
        print("flying...")
    def sound(self):
        print("sounded could handle by bird breed")

class Crow(Bird):
    def sound(self):
        print("KAKAKKAKA...")

class Peacock(Bird):
    def sound(self):
        print("Tehoon Tehoon....")

c = Crow()
c.fly()
c.sound()

p = Peacock()
p.sound()
p.fly()