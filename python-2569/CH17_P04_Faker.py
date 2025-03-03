
import pymysql
import random
from faker import Faker 

connection  = pymysql.connect(host='localhost',user='root',password='',database='pydb')
f = Faker()
with connection:
    print("database connected..");
    cursor = connection.cursor()
    
    with cursor:
        for i in range(200):
            name = f.name()
            email  =f.email()
            address = f.address()
            salary = random.randint(1,10)*10000
            date = f"{random.randint(2000, 2025)}/{random.randint(1, 12)}/{random.randint(1, 20)}"
            query = "INSERT INTO `employees`(`name`, `email`, `address`, `salary`, `joining_date`) VALUES(%s, %s, %s, %s, %s)"
            cursor.execute(query,(name,email,address,salary,date))
            connection.commit()
            print(f"{name} inserted")