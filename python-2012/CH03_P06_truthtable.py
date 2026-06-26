
values = [True, False]

print("{:5} | {:5} | {:5} | {:5}".format(str('A'),str('B'),str('AND'),str('OR')))
for A in values:
    for B in values:
        print("{:5} | {:5} | {:5} | {:5}".format(str(A),str(B),str(A and B),str(A or B)))