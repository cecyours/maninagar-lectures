
def check_prime(num):
    is_prime = True
    for i in range(2,num//2+1):
        if num%i==0:
            is_prime = False
            break
    return is_prime

if __name__=="__main__":
    n = int(input("Enter a number : "))

    is_prime = check_prime(n)

    if is_prime:
        print(f"{n} is prime")
    else:
        print(f"{n} is not prime")
