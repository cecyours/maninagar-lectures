
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

rows = pd.DataFrame({
 "x": [1, 2, 3, 4, 5, 6, 7, 8],
 "y": [2, 4, 6, 8, 10, 12, 14, 16],
})

print(rows)

X = rows[["x"]]
y = rows["y"]

# print(X)
# print(y)

X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.35,shuffle=False)

print(len(X_train),len(X_test))

lin = LinearRegression()
lin.fit(X_train,y_train) # training thai rahyu che

pred = lin.predict(X_test)

print("--------")
print(pred)
print("--------")
print(y_test)


