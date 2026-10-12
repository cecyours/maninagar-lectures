import pandas as pd
from scipy import stats

data = pd.DataFrame({"morning":[8, 9, 10, 9, 11],"evening":[14, 16, 15, 18, 17]})

print(stats.ttest_ind(data['morning'],data['evening'],equal_var=False))

