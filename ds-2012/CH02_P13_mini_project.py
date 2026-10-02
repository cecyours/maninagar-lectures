import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
sales = pd.DataFrame({
 "region": ["East", "East", "West", "West", "West", "East", "East", "West"],
 "category": ["Snacks", "Produce", "Snacks", "Produce",
 "Produce", "Snacks", "Dairy", "Dairy"],
 "amount": [420, 310, 180, None, 'k', 420, 150, 90]
})


print(sales)
print(sales.dtypes)

sales['amount'] = pd.to_numeric(sales["amount"],errors='coerce')

print(sales)
sales = sales.dropna(subset=['amount'])
sales = sales.drop_duplicates()
print(sales)

sns.barplot(data=sales,x='category',y='amount',errorbar=None)

plt.title("Sales")
plt.xlabel("dsegion")
plt.ylabel("Amount")
plt.show()