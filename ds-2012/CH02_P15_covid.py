import pandas as pd
import matplotlib.pyplot as plt
covid = pd.DataFrame({
 "place": [
 "Riverbend", "Riverbend", "Riverbend", "Riverbend",
 "Oakridge", "Oakridge", "Oakridge", "Oakridge",
 "Hillport", "Hillport", "Hillport", "Hillport",
 "Riverbend"
 ],
 "week": [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 2],
 "reported_count": [12, 18, 17, 22, 9, 11, 2, 10, 7, 7, 8, 6, 18]
})

data = covid.groupby("place")['reported_count'].sum()


print(data)
print("----------")
places = ['Riverbend','Oakridge','Hillport']

for p in places:
    slice_ = covid[covid['place']==p].sort_values('week')
    print(slice_)
    plt.plot(slice_['week'],slice_['reported_count'],label=p,marker='x')
    print("---------")

plt.xlabel("Week")
plt.ylabel("Reported count")
plt.legend()

plt.show()