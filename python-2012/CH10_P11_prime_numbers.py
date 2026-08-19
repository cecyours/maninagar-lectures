from CH10_P10_prime_number import check_prime

start = int(input("Enter a start number : "))
end = int(input("Enter a end number : "))

for i in range(start,end+1):
    is_prime = check_prime(i)
    if is_prime:
        print(i,is_prime)