import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

data = pd.read_csv("./assets/students.csv")

sns.barplot(data=data,x='subject',y='marks',estimator='sum',errorbar=None)
plt.title("Lorem")
plt.xlabel("Subject")
plt.show()


