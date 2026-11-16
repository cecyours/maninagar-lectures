import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

rows = pd.DataFrame({
 "x": [1, 2, 3, 4, 5, 6, 7, 8,9,10],
 "y": [2, 4, 6, 8, 10, 12, 14, 16,18,20],
})
# 
X_train,X_test,y_train,y_test = train_test_split(rows[['x']],rows['y'],test_size=0.3,shuffle=True)

print(y_train)
print("--------")
print(y_test)
# 

model = LinearRegression()
model.fit(X_train,y_train) # train kryu model

pred = model.predict(X_test) 

print("----------")
# print(pred)
# print(y_test)

for i in range(len(X_test)):
    print(y_test.iloc[i]," = ", pred[i])


print("---------")
print(r2_score(y_test,pred))