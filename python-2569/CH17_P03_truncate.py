
import pymysql

connection  = pymysql.connect(host='localhost',user='root',password='',database='pydb')

with connection:
    print("database connected..");
    cursor = connection.cursor()
    
    with cursor: 
        query = "TRUNCATE TABLE `employees`"
        cursor.execute(query)
        connection.commit()
        print(f"student are deleted")