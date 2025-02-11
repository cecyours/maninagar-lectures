
import pymysql

connection  = pymysql.connect(host='localhost',user='root',password='',database='pydb')

with connection:
    print("database connected..");
    cursor = connection.cursor()
    
    with cursor:
        # query = "CREATE TABLE `students`(`id` int(11) NOT NULL AUTO_INCREMENT,`name` varchar(20), `email` varchar(20), PRIMARY KEY (`id`))";
        query = "CREATE TABLE `employees`(`id` int(11) NOT NULL AUTO_INCREMENT,`name` varchar(20), `email` varchar(20),`address` varchar(100),`salary` double,`joining_date` varchar(30) , PRIMARY KEY (`id`))"
        cursor.execute(query);
        connection.commit();