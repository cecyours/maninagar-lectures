import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_excel("sales_data.xlsx")

# print(df)

# print(df.head())

# print(df.tail())

# print(df.shape)

# print(df.columns)

# print(df.info())

# print(df[df["City"] == "Ahmedabad"])

# print(df[df["Sales"]>5000])

# print(df[df["Quantity"]>3])

# print(df[(df["City"] == "Ahmedabad") & (df["Sales"] > 5000)])

# city_sales = df.groupby("City")["Sales"].sum()
# print(city_sales)

# print(df.groupby("City")["Sales"].mean())

# print(df.groupby("Category")["Profit"].sum())



# Bar Chart
# city_sales = df.groupby("City")["Sales"].sum()
# city_sales.plot(kind="bar")
# plt.title("City Sales")
# plt.xlabel("City")
# plt.ylabel("Sales")
# plt.show()


# Line Chart
# monthly_sales = df.groupby("Category")["Sales"].sum()
# monthly_sales.plot(kind="line")
# plt.title("Category Sales")
# plt.xlabel("Category")
# plt.ylabel("Sales")
# plt.show()

# Pie Chart
# category_sales = df.groupby("Category")["Sales"].sum()
# category_sales.plot(kind="pie",autopct="%1.1f%%")
# plt.ylabel("")
# plt.title("Category wise Sales")
# plt.show()

# Histogram
# df["Sales"].plot(kind="hist")
# plt.title("Sales Distribution")
# plt.xlabel("Sales")
# plt.show()

# Practical
print(df.head())
print(df[df["City"]=="Ahmedabad"])
print(df.groupby("City")["Sales"].sum())
print(df.groupby("Category")["Profit"].sum())
city_sales = df.groupby("City")["Sales"].sum()
city_sales.plot(kind="bar")
plt.title("City Wise Sales")
plt.xlabel("City")
plt.ylabel("Sales")
plt.show()
category_sales = df.groupby("Category")["Sales"].sum()
category_sales.plot(kind="pie",autopct="%1.1f%%")
plt.ylabel("")
plt.title("Category Wise Sales")
plt.show()
