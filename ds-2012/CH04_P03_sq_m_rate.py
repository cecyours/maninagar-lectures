import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score

homes =    pd.DataFrame({"sq_m": [42, 55, 60, 72, 80, 88, 95, 110],
                        "price": [28, 34, 36, 44, 48, 52, 58, 68]})

# print(homes)

X_train,X_test,y_train,y_test = train_test_split(homes[["sq_m"]],homes['price'],test_size=0.5)

lin = LinearRegression()
lin.fit(X_train,y_train)

pred = lin.predict(X_test)

print("------")
print(y_test)
print(pred)
print("--------")
print(r2_score(y_test,pred))

plt.scatter(homes["sq_m"], homes["price"])

line_x = pd.DataFrame({"sq_m": sorted(homes["sq_m"])})
plt.plot(line_x["sq_m"], lin.predict(line_x))
plt.scatter(X_test,pred,colorizer='red')
plt.show()


