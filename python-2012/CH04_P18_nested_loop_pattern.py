


# for i in range(10):
#     for j in range(10):
#         if i == j:
#             print("*", end=" ")
#         else:
#             print(" ",end=" ")
#     print()

for i in range(1,11):  # row
    for j in range(1,11): # col
        if(j==3):
            print("-",end="")
        print(f"({i:2} {j:2}) ",end=" ")
    print() # help to print new line