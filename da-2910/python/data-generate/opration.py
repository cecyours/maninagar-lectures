import pandas as pd

# Load the dataset
df = pd.read_csv("data.csv")

# Outlier removal for 'salary' using IQR
Q1 = df["salary"].quantile(0.25)
Q3 = df["salary"].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Filter out outliers
df_no_outliers = df[(df["salary"] > lower_bound) & (df["salary"] < upper_bound)]

print(f"Original data size: {df.shape[0]}")
print(f"Data size after removing outliers: {df_no_outliers.shape[0]}")

# Save the cleaned data
df_no_outliers.to_csv("data_no_outliers.csv", index=False)
