import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error,accuracy_score

maple = pd.DataFrame({
 "sq_m": [48, 52, 60, 64, 72, 78, 85, 90, 98, 110, 54, 88],
 "rooms": [1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 1, 3],
 "age_years": [12, 8, 20, 5, 15, 4, 30, 6, 2, 18, 9, 7],
 "price": [32, 36, 38, 46, 44, 54, 48, 62, 70, 72, 34, 60],
})
maple['sq_m_per_room'] = maple["sq_m"]/maple['rooms']

print(maple)
X_train,X_test,y_train,y_test = train_test_split(maple[['sq_m','rooms','age_years','sq_m_per_room']],maple['price'],test_size=0.21,shuffle=True)

model = LinearRegression()
model.fit(X_train,y_train)

pred = model.predict(X_test)

print("-------------")
print(y_test)
print("-------------")
print(pred)
print("-------------")

print(round(mean_absolute_error(y_test,pred),2))