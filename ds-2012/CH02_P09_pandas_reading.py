
import pandas as pd

data = pd.read_csv("./assets/students.csv")

print(data.head())
print(data.tail())
print(data.dtypes)

print("-------------")
# print(data["name"])

data['marks'] = pd.to_numeric(data['marks'],errors='coerce')
data = data.dropna(subset=["marks"])

print(data[data["subject"]=="Python"])

print("-------------------")

report = data.groupby("subject")["marks"].mean()
print(report)