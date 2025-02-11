
try:
    a = [1,2,3,4,5,6,7,8,9,0]

    n = int(input("Enter the number : "))

    s = sum(a)/a[n]

    print(s);
except ValueError:
    print("Bhai, value dekh kr dal")
except ZeroDivisionError:
    print("Opps, Zero aa gya")
except IndexError:
    print("Aukat ke bahar aa gye")
except:
    print("Mujhe error nahi pata, something went wrong")
    pass
else:
    print("Koi error nahi aye gai")
finally:
    print("I am Iron Man !!")
