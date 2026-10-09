import pandas as pd
delay = pd.DataFrame({
 "route": ["N1", "N2", "N3", "N1", "N4", "N5"],
 "status": ["late", "Late", "on time", "late", "late", "LATE"],
 "delay_min": [12, 15, 0, 12, None, 400]
})

print("means : ",delay['delay_min'].mean())
delay['status'] = delay['status'].str.lower()
delay = delay.drop_duplicates()
delay["delay_min"] = pd.to_numeric(delay["delay_min"],errors='coerce')
delay.loc[delay["delay_min"] > 120, "delay_min"] = pd.NA

print(delay)
print("means : ",delay['delay_min'].mean())

print("total delay : ",delay["delay_min"].notna().sum())
