import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

data = pd.read_csv("./assets/country_wise_latest.csv")

# print(data.head(10))
data = data.drop_duplicates()

sns.barplot(data=data,x='WHO Region',y='Confirmed',errorbar=None)
plt.title("Covid")
plt.xlabel("Region")
plt.ylabel("Confirmed")
plt.show()