import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.model_selection import train_test_split

tickets = pd.DataFrame({
 "wait_min": [4, 6, 8, 12, 15, 18, 22, 25, 30, 35],
 "escalated": [0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
})

X_train,X_test,y_train,y_test = train_test_split(tickets[['wait_min']],tickets['escalated'],test_size=0.3)

model = LogisticRegression()

model.fit(X_train,y_train)

pred = model.predict(X_test)

print(accuracy_score(y_test,pred))

print(pred)

print("------------")
print(model.predict(np.array([2,40]).reshape(-1,1)))

# y = mx + c

print(confusion_matrix(y_test,pred))