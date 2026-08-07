
import pandas as pd
import matplotlib.pyplot as plt
print("Libraries Installed Successfully")

df = pd.read_excel("sales_data.xlsx")
print(df)

print(df[df["City"]=="Surat"])
print(df[df["Sales"]<=4500])
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