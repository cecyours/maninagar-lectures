import csv
import random
from datetime import datetime, timedelta

# Given data with some corrupted values
products = [
    {"name": "iPhone 15", "price": 999},
    {"name": "Xiaomi Redmi", "price": "250"},
    {"name": "OnePlus 9"},
    {"price": 450},
    {"name": "Realme X7", "price": 300},
    {"name": "", "price": 129},
    {"name": "Pixel 7", "price": None},
    {"name": "Motorola Edge", "price": 520},
    {"name": "Sony Xperia", "price": -100},
    {"name": "Asus ROG Phone", "price": 899},
    {"name": "Huawei P40", "price": "NaN"},
    {"name": "Nokia G21", "price": 180},
    {"name": "Infinix Zero", "price": None},
    {"name": None, "price": 250},
    {"name": "ZTE Axon", "price": "four hundred"},
    {"name": "Vivo Y20", "price": 200},
    {"name": "Nothing Phone", "price": ""},
    {"name": "Honor Magic", "price": 700},
    {"name": "Alcatel 3X", "price": 150},
    {"name": 12345, "price": 320}
]

employees = [
    "John Doe", "Jane Smith", "Robert Brown", "Emily Johnson", "",
    "Michael Williams", None, "David Miller", "Chris O'Neil", 12345, "Sophia Anderson"
]

cities = [
    "New York", "Los Angeles", "London", "Tokyo", "", "Mumbai",
    None, "Berlin", 12345, "São Paulo", "Paris"
]

feedback_options = ["Excellent", "Good", "Average", "Poor", "Terrible", ""]

num_records = 1000
csv_filename = "sales_data.csv"

with open(csv_filename, mode="w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["Product Name", "Price", "Quantity", "Discount", "Total Price", "Employee", "City", "Date", "Feedback"])

    for _ in range(num_records):
        product = random.choice(products)
        name = product.get("name") if isinstance(product.get("name"), str) and product.get("name") else "Unknown"
        price = product.get("price")

        # Validate and fix price
        if price is None or isinstance(price, str) and not price.replace(".", "", 1).isdigit():
            price = random.randint(100, 1000)  # Assign random valid price if corrupted
        else:
            price = float(price)
            if price <= 0:
                price = random.randint(100, 1000)

        quantity = random.randint(1, 10)
        discount = random.randint(0, 20)  # Discount percentage
        total_price = round(price * quantity * (1 - discount / 100), 2)

        employee = random.choice(employees)
        employee = employee if isinstance(employee, str) and employee else None

        city = random.choice(cities)
        city = city if isinstance(city, str) and city else None

        date = datetime.today() - timedelta(days=random.randint(0, 365))
        date_str = date.strftime("%Y-%m-%d")

        feedback = random.choice(feedback_options)

        writer.writerow([name, price, quantity, discount, total_price, employee, city, date_str, feedback])

print(f"CSV file '{csv_filename}' generated successfully!")
