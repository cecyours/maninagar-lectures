import pandas as pd
import xgboost as xgb
import lightgbm as lgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

wait = list(range(4,24))
esc = [0 if i < 16 else 1 for i in wait]
esc[15]=0
data = pd.DataFrame({"wait":wait,"esc":esc})

X_train,X_test,y_train,y_test = train_test_split(data[['wait']],data['esc'])

print(data)
model = xgb.XGBClassifier(n_estimators=40, max_depth=2, learning_rate=0.2)
model.fit(X_train,y_train)

pred = model.predict(X_test)

print(y_test.tolist())
print(pred.tolist())
print(accuracy_score(y_test,pred))


lclf = lgb.LGBMClassifier(
 n_estimators=40, max_depth=2, learning_rate=0.2,
 random_state=0, verbose=-1, min_child_samples=3
)

lclf.fit(X_train, y_train)
print("lgb", lclf.predict(X_test).tolist(),
 round(accuracy_score(y_test, lclf.predict(X_test)), 3))
