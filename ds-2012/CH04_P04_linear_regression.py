import pandas as pd
import numpy
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error,r2_score
homes = pd.DataFrame({
 "sq_m": [42, 55, 60, 72, 80, 88, 95, 110],
 "price": [28, 34, 36, 44, 48, 52, 58, 68],
})

X = homes[['sq_m']]
y= homes['price']

X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.4,random_state=True)

model = LinearRegression()
model.fit(X=X_train,y=y_train)

pred = model.predict(X_test)
print(pred)
print("--------")
print(y_test)
print("---------")
print(r2_score(y_test,pred))

print("-----------------")

pred2 = model.predict(numpy.array([80,95,200, 240]).reshape(-1, 1))
print(pred2)
