import pandas as pd
import matplotlib.pyplot as plt

wait = pd.Series([8, 9, 9, 10, 12, 12, 12, 40])

print("mean : ",wait.mean())
print("median : ",wait.median())
print("mode : ",wait.mode())
print("sd : ",wait.std())
