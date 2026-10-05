# Local Variables
def test():
    x = 10
    print("Inside function:", x)
test()
print("Outside function:", x)

# Global Variables
x = 50
def show_value():
    print("Value of x:", x)
show_value()
print("Outside function:", x)

# Global Variables Inside a Function
count = 0
def increase():
    global count
    count = count + 1
    print("Inside function:", count)
increase()
print("Outside function:", count)
