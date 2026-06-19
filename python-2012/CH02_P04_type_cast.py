import math
# int -> float
a = "322"
i = int(a)
f = float(i)

print(f"a : {a}, type : {type(a)}")
print(f"i : {i}, type : {type(i)}")
print(f"f : {f}, type : {type(f)}")

# float -> int
pi = 3.64
i = int(pi)

print(f"pi : {pi}, type : {type(pi)}")
print(f" i : {i}, type : {type(i)}")

print('------------')
print(math.floor(4.28)) # 4
print(round(4.18)) # 5
print(math.ceil(4.18)) # 5
