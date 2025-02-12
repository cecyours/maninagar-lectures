import csv

file_path = "./data-generate/sales_data.csv"

with open(file_path, "r") as file:
    reader = csv.DictReader(file)  # Uses first row as column names
    headers = reader.fieldnames  # Extract headers (column names)
    data = [row for row in reader]  # Convert to list of dictionaries

for row in data:
    if(float(row["Price"])>500):
        print("{:20} | {:20} | {:20}".format(row["Product Name"],row["Price"], row["City"] )) 
