import requests
import random
import datetime

# Replace with your actual API endpoint
API_URL = "http://localhost:3000/api/payment-history"

# ServiceAgreement ID
service_agreement_id = "6762627c4c424249a66d2cbb"

# Function to generate a random installment month in the format YYYY-MM
def generate_installment_month(start_year=2020, end_year=2025):
    year = random.randint(start_year, end_year)
    month = random.randint(1, 12)
    return f"{year}-{month:02d}"

# Generate 200 records
for i in range(200):
    data = {
        "serviceAgreement": service_agreement_id,
        "installmentMonth": generate_installment_month(),
        "amount": round(random.uniform(100, 1000), 2),  # Random amount between 100 and 1000
        "paidDate": None,  # Default as None for PENDING status
        "paymentStatus": random.choice(["PENDING", "PAID", "OVERDUE"]),
    }
    
    # Make the POST request
    try:
        response = requests.post(API_URL, json=data)
        if response.status_code == 201:
            print(f"Record {i + 1} created successfully.")
        else:
            print(f"Failed to create record {i + 1}. Status Code: {response.status_code}, Response: {response.text}")
    except Exception as e:
        print(f"An error occurred for record {i + 1}: {e}")