import pandas as pd
from sklearn.ensemble import IsolationForest
pay = pd.DataFrame({"amount": [20, 22, 19, 21,600, 23, 18, 20, 25]})
iso = IsolationForest(random_state=0, contamination=0.125)
print(iso.fit_predict(pay))
