import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix

nimbus = pd.DataFrame({
 "income": [28, 32, 35, 40, 42, 48, 55, 60, 72, 80, 38, 90],
 "months": [6, 10, 14, 18, 8, 24, 30, 36, 12, 48, 9, 40],
 "util": [0.82, 0.70, 0.65, 0.40, 0.88, 0.35, 0.28, 0.22, 0.55, 0.18, 0.75, 0.15],
 "defaulted": [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
})

X = nimbus[['income','months','util']]
y = nimbus['defaulted']

X_train,X_test,y_train,y_test = train_test_split(X,y,shuffle=True,test_size=0.25)

model = LogisticRegression()
model.fit(X_train,y_train)

pred = model.predict(X_test)


print("-------------")
print(y_test)
print("-------------")
print(pred)
print("-------------")

print(accuracy_score(y_test,pred))

print(confusion_matrix(y_test,pred))

print(dict(zip(X.columns, model.coef_[0].round(3).tolist())))
