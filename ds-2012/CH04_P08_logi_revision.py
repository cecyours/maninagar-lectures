import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.model_selection import train_test_split

tickets = pd.DataFrame({
 "wait_min": [4, 6, 8, 12, 15, 18, 22, 25, 30, 35],
 "escalated": [0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
})

X_train,X_test,y_train,y_test = train_test_split(tickets[['wait_min']],tickets['escalated'],test_size=0.25,shuffle=True)

model = LogisticRegression()

model.fit(X_train,y_train)

pred = model.predict(X_test)

for i in range(len(X_test)):
    print(f"{str(X_test.iloc[i])} => {y_test.iloc[i]} = {pred[i]}")

print(accuracy_score(y_test,pred))

print(confusion_matrix(y_test,pred))
    