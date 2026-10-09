import pandas as pd

churn = pd.DataFrame({
 "id": list(range(1, 13)),
 "tenure_months": [18, 3, 24, 4, 14, 2, 20, 6, 16, 5, 22, 3],
 "monthly_spend": [420, 180, 510, 90, 380, None, 440, 210, 400, 150, 490, 120],
 "tickets": [1, 5, 0, 6, 2, 8, 1, 4, 1, 7, None, None],
 "plan": ["plus", "basic", "plus", "basic", "plus", "basic",
 "plus", "basic", "plus", "basic", "plus", "basic"],
 "churned": ["no", "yes", "no", "yes", "yes", "yes",
 "no", "yes", "no", "yes", "no", "yes"]
})

print(churn)
print("NA count : ",churn.isna().sum())
churn["spend_missing"] = churn['monthly_spend'].isna()
churn["missing"] = churn.isna().any(axis=1)


print('------------')
print(churn)

print("mean : ",churn.groupby("churned")['missing'].mean())
print(churn.groupby("churned")[["tenure_months", "monthly_spend", "tickets"]].mean())

