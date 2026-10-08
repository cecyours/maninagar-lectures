
import pandas as pd
import matplotlib.pyplot as plt

data = pd.DataFrame({"status":["open","open","closed","open","closed"],"priority":["high",None,"low","high","medium"]})

# data = data.dropna(subset=['priority'])
data["priority"] = data["priority"].fillna("Unknown")
data = data.drop_duplicates()
print(data)

data["priority"] = data["priority"].fillna("Unknown")

status_count = data["status"].value_counts()

status_count.plot(kind="bar")

plt.xlabel("Status")
plt.ylabel("Count")
plt.title("Status Count")
plt.show()
