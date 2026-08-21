import pandas as pd
import json
filename = "./assets/data.json"

with open(filename,"r") as file:
    data = json.loads(file.read())

df = pd.DataFrame(data)
print("default : ")
print(df)
print("---------------")

def add_item():
    item_name = input("Enter item name : ")
    item_qnt = int(input("Enter Item qnt : "))
    item_price = float(input("Enter Item Price : "))

    data[item_name] = {"qnt":item_qnt,"price":item_price}
    print(f"{item_name} added succfully")

def display():
    df = pd.DataFrame(data)
    print("--------------")
    print(df)
    print("--------------")

def remove_item():
    item_name = input("Enter item name for remove : ")
    if data[item_name]:
        print(f"deleting item : {item_name}")
        del data[item_name]
    else:
        print(f"{item_name} not found")

def sell_item():
    item_name = input("Enter Item name : ")
    if not data.get(item_name):
        print(f"{item_name} not found please try again")
        return
    item_qnt = int(input("enter qnt to sell : "))
    price = item_qnt*data[item_name]['price'] 
    print(f"total selling : {price}")
    data[item_name]['qnt']-=item_qnt

def buy_item():
    item_name = input("Enter Item name : ")
    if not data.get(item_name):
        print(f"{item_name} not found please try again")
        return
    item_qnt = int(input("enter qnt to sell : "))
    price = item_qnt*data[item_name]['price'] 
    print(f"total cost : {price}")
    data[item_name]['qnt']+=item_qnt

choice = 0

while choice!=-1:
    print("\nEnter 1 for add new item ")
    print("Enter 2 for display ")
    print("Enter 3 for remove item ")
    print("Enter 4 for sell qnt")
    print("Enter 5 for buy qnt")
    print("Enter -1 for exit")
    try:
        choice = int(input("Enter your choice : "))
    except ValueError as e:
        choice=0
        print("bhai value joi n nakh")

    if choice==1:
        add_item()
    elif choice==-1:
        print("Exit...")
    elif choice==2:
        display()
    elif choice==3:
        remove_item()
    elif choice==4:
        sell_item()
    elif choice==5:
        buy_item()


with open(filename,"w") as file:
    file.write(json.dumps(data))
    print("records save successfully")