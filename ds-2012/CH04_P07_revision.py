import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score
homes = pd.DataFrame({
    "sq_m": [42, 55, 60, 72, 80, 88, 95, 110],
 "price": [28, 34, 36, 44, 48, 52, 58, 68],
})

X_train, X_test, y_train, y_test = train_test_split(
 homes[["sq_m"]], homes["price"], test_size=0.25, shuffle=True
)

model = LinearRegression()
model.fit(X_train,y_train)

pred = model.predict(X_test)

for i in range(len(X_test)):
    print(y_test.iloc[i]," = ", pred[i])


print(r2_score(y_test,pred))


plt.scatter(homes["sq_m"], homes["price"])
line_x = pd.DataFrame({"sq_m": sorted(homes["sq_m"])})
plt.plot(line_x["sq_m"], model.predict(line_x))

plt.xlabel("sq_m")
plt.ylabel("price")
plt.show()

target = pd.DataFrame({"sq_m":[250,300,42]})
pred = model.predict(target[['sq_m']])

print(pred)