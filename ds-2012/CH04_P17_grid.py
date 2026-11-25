import pandas as pd
from sklearn.model_selection import GridSearchCV,train_test_split
from sklearn.metrics import r2_score,accuracy_score
from sklearn.neighbors import KNeighborsClassifier
tickets = pd.DataFrame({
 "wait_min": [4, 6, 8, 12, 15, 18, 22, 25, 30, 35],
 "escalated": [0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
})

X_train,X_test,y_train,y_test = train_test_split(tickets[['wait_min']],tickets['escalated'])

# model = KNeighborsClassifier(n_neighbors=3)
# model.fit(X_train,y_train)

# pred = model.predict(X_test)

# print(accuracy_score(y_test,pred))
grid = GridSearchCV(
 KNeighborsClassifier(),
 {"n_neighbors": [1, 3, 5]},
 cv=3,
 scoring="accuracy",
)

grid.fit(tickets[['wait_min']],tickets['escalated'])
print(grid.best_params_," => ",grid.best_score_)