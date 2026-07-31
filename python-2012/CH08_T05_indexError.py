
data = ["apple","banana","cherry","mango"]

print(data)


try:
    get_by_index = int(input("Enter index for selected "))
    print(f"you selected {data[get_by_index]}")
except ValueError:
    print("invalid value")
except IndexError:
    print("invalid Index")
except Exception: # handle every runtime error 
    print("someting went wrong")
finally:
    print("completed!!")

print("Database close kro")