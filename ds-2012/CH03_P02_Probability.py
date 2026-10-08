import pandas as pd
import matplotlib.pyplot as plt

wait = pd.Series([4, 6, 5, 9, 7, 6, 5, 8, 6, 7])
print(wait.mean())
print(wait.std())
plt.hist(wait, bins=5)
plt.title("Help-desk wait (minutes)")
plt.xlabel("Minutes")
plt.ylabel("Count")

plt.show()