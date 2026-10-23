def modify_list(lst):
    lst.append(100)
def modify_numbers(n):
    n += 100
    return n

my_list= [1, 2, 3]
my_num = 10
modify_list(my_list)
my_num = modify_numbers(my_num)

print("List after modification:", my_list) 
print("Number after modification:", my_num)