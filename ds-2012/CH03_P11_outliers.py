import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
spend = pd.Series([12, 12, 25, 25, 40, 40, 40, 200])

q1 = spend.quantile(0.25)
q3 = spend.quantile(0.75)

iqr = q3-q1
low  = q1-1.5*iqr
high =  q3+1.5*iqr

print("low : ",low)
print("high : ",high)
print("data mean : ",spend.mean())
error =spend[(spend<low)|(spend>high)]
print(error)
spend = spend[(spend >= low) & (spend <= high)]
print("data mean : ",spend.mean())


