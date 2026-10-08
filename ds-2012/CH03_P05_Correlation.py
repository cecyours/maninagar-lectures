import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
pair = pd.DataFrame({
 "tenure": [2, 4, 6, 8, 10, 12, 14, 16],
 "spend": [90, 110, 140, 155, 180, 200, 210, 240]
})

print(round(pair["tenure"].corr(pair["spend"]), 3))

# plt.scatter(pair["tenure"], pair["spend"])
sns.heatmap(pair.corr(numeric_only=True), annot=True)

plt.title("Tenure vs spend")
plt.xlabel("Tenure (months)")
plt.ylabel("Spend")
plt.show()
