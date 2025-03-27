import matplotlib.pyplot as plt
import pandas as pd

data = pd.read_csv('./data-generate/sales_data.csv')



x = data["Date"]
y = data["Product Name"].astype(str)


plt.bar(x, y)

plt.bar(x, y)

plt.title("Product Trend By Date")

plt.ylabel('Product Name')

plt.xlabel('Date')

plt.show()



# Line chart
# x = [10, 20, 30, 40]
# y = [20, 25, 35, 55]

# plt.plot(x , y)
# plt.title("Line Chart")

# plt.ylabel('Y-Axis')

# plt.xlabel('X-Axis')







# Product,Category,Region,Quarter,Units_Sold,Revenue ($),Profit ($),Cost ($),Customer_Rating