import pandas as pd
tiny = pd.DataFrame({
 "plan": ["basic", "plus", "basic", "pro"],
 "util": [0.81, 0.40, 0.74, 0.20],
"income": [32, 55, 38, 80],
})

tiny["high_util"] = (tiny["util"] > 0.7).astype(int)
dummies = pd.get_dummies(tiny["plan"], prefix="plan")
out = pd.concat([tiny[["util", "income", "high_util"]], dummies], axis=1)
print(out)

print(out[["util", "income"]].corr().round(2))



