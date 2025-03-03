import numpy as np

a1 = np.arange(4).reshape(2,2)
a2 = np.array([3,4])

print(a1)
print("-----")
print(a2)
print("-----")

a3 = np.add(a1,a2)

print(a3)
print("-----")
a3 = np.subtract(a1,a2)
print(a3)