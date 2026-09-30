import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("./assets/students.csv")

print(data.tail())

plt.bar(data['subject'],data['marks'])
plt.title("Marks records")
plt.xlabel("Subject")
plt.ylabel("Marks")
plt.show()

################ 

# Load the dataset
data = pd.read_csv("./assets/students.csv")
data['marks'] = pd.to_numeric(data['marks'],errors='coerce')
data = data.dropna(subset=["marks"])

g =data.groupby("subject")["marks"].sum()

# Print the last few rows to verify structure
print(data.tail())

plt.pie(g.values, labels=g.index,startangle=140)

# Styling details
plt.title("Marks records")

# Optional: Ensure the pie chart is rendered as a perfect circle
plt.axis('equal') 

plt.show()


