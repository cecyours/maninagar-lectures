import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

shop = pd.DataFrame({
    "visits": [
        2, 3, 2, 12, 14, 13, 28, 30, 27,
        4, 5, 3, 10, 11, 15, 25, 29, 32,
        6, 7, 8, 16, 18, 20, 35, 38, 40,
        9, 22, 33
    ],
    "spend": [
        400, 450, 380, 2200, 2400, 2100, 6200, 6500, 6100,
        550, 700, 480, 1800, 2000, 2600, 5500, 6300, 7000,
        850, 950, 1100, 2800, 3200, 3800, 7500, 8200, 9000,
        1500, 4200, 7200
    ]
})

shop['CPL'] = shop['spend'] / shop['visits']

km = KMeans(n_clusters=4,random_state=42,n_init=3)
shop['group'] = km.fit_predict(shop[['visits','spend']])

print(shop)
plt.scatter(shop['spend'], shop['visits'], c=shop['group'])
plt.xlabel('Spend')
plt.ylabel('Group')
plt.show()
