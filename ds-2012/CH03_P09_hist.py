import pandas as pd
import matplotlib.pyplot as plt

wait = pd.Series([11, 13, 12, 14, 13, 12, 15, 13, 12, 14,16])

print("mean : ",wait.mean())
print("std : ",wait.std())

plt.hist(wait,bins=range(11,18))
plt.title("histogram")
plt.show()