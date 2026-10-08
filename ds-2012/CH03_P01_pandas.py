import pandas as pd
lst = [200,400,100,300,600]
data = pd.Series(lst)

print(data)
print("  mean : ",data.mean())
print("median : ",data.median())
print("  mode : ",data.mode().tolist())

print("----------------")

desk = pd.DataFrame({
 "team": ["A", "A", "A", "A", "A", "B", "B", "B", "B", "B"],
 "minutes": [10, 12, 11, 9, 13, 2, 11, 20, 5, 17]
})

print(desk.groupby('team')['minutes'].sum())
print(desk.groupby('team')['minutes'].mean())
print(desk.groupby('team')['minutes'].median())

print("---------")
print(desk.groupby("team")["minutes"].agg(["mean", "sum"]))

