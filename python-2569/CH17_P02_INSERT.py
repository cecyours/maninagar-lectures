
import pymysql

connection  = pymysql.connect(host='localhost',user='root',password='',database='pydb')

with connection:
    print("database connected..");
    cursor = connection.cursor()
    
    with cursor:
        name = input("Enter the name : ")
        email = input("Enter the email : ")
        query = "INSERT INTO `students`(`name`,`email`) VALUES(%s,%s)"
        cursor.execute(query,(name,email))
        connection.commit()
        print(f"{name} inserted")