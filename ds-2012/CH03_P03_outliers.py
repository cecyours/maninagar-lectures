import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

spend = pd.Series([170,180, 210, 220, 240, 250, 260, 270, 280, 900,1800])

q1 = spend.quantile(0.25)
q3 = spend.quantile(0.75)
iqr = q3-q1
low = q1-1.5*iqr
high = q1+1.5*iqr

print("q1 : ",q1,"q3",q3)
print(low,high)
print("outlier : ",spend[(spend<low) | (spend>high)].tolist())

sns.boxplot(x=spend)
plt.show()

