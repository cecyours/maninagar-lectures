import pandas as pd
data = pd.DataFrame({
 "group": ["stay", "stay", "stay", "left", "left", "left"],
 "spend": [420, 400, 399, 180, None, None]
})

# print(data)
print(data['spend'].isna().sum())

data['missing'] = data['spend'].isna()

print(data)

print(data.groupby('group')['missing'].mean())