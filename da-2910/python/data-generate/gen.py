import pandas as pd
import numpy as np

# Creating sample data
np.random.seed(42)
data = {
    "age": np.random.randint(22, 60, 50),
    "salary": np.random.randint(30000, 120000, 50),
    "experience": np.random.randint(1, 35, 50),
    "department": np.random.choice(["HR", "IT", "Finance", "Marketing"], 50),
    "performance_score": np.random.randint(1, 10, 50)
}

# Creating DataFrame
df = pd.DataFrame(data)

# Introducing some missing values
df.loc[5, "salary"] = np.nan
df.loc[10, "experience"] = np.nan

# Introducing some outliers
df.loc[2, "salary"] = 200000  
df.loc[8, "performance_score"] = 50  

# Save to CSV
file_path = "data.csv"
df.to_csv(file_path, index=False)

file_path
