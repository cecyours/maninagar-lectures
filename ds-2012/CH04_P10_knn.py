import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.neighbors import KNeighborsClassifier
import matplotlib.pyplot as plt
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler

tickets = pd.DataFrame({
 "wait_min": [4, 6, 8, 12, 15, 18, 22, 25, 30, 35],
  "escalated": [
        0, 0, 0, 1, 1,
        1, 2, 2, 2, 2
    ],
    })

scaler = StandardScaler()

X_train, X_test,y_train,y_test = train_test_split(tickets[['wait_min']],tickets['escalated'],test_size=0.25,shuffle=True)

X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.fit_transform(X_test)


knn = KNeighborsClassifier()
knn.fit(X_train_s,y_train)

pred = knn.predict(X_test_s)

print(pred," => ",accuracy_score(y_test,pred))


plt.xlabel("wait_min")
plt.ylabel("escalated")

plt.scatter(X_train['wait_min'],y_train,color="blue",s=100)
plt.scatter(X_test['wait_min'],y_test,color="green",s=100)
plt.scatter(X_test['wait_min'],pred,color="red",marker='x',s=100)
plt.show()