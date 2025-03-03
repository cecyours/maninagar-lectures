from datetime import date,datetime

d = date.today()
print("Today's date is",d)

print("Year:",d.year)
print("Month:",d.month)
print("Day:",d.day)

print("Today's date is",d.strftime("%d-%m-%Y"))

print("Day",d.strftime("%A"))
print("Month",d.strftime("%m"))
print("Year",d.strftime("%Y"))


time = datetime.now()
print("Current time is",time)

print("Time:",time.strftime("%H:%M:%S"))

print("Hour:",time.hour)
print("Minute:",time.minute)
print("Second:",time.second)
print("Microsecond:",time.microsecond)