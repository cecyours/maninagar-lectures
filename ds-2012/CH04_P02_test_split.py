import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

rows = pd.DataFrame({
 "x": [1, 2, 3, 4, 5, 6, 7, 8],
 "y": [2.5, 4.5, 6.5, 8.5, 10.5, 12.5, 14.5, 16.5],
})

X = rows[['x']]
y = rows['y']

X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.25,shuffle=False)

model = LinearRegression()

model.fit(X_train,y_train)

new_data = pd.DataFrame({"x":[5.6,50]})
result = model.predict(new_data[['x']])

# print(X_test)
print(result)
print(y_test)

print(round(mean_absolute_error(y_test, model.predict(X_test)), 2))

