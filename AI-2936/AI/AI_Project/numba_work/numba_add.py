import time
from numba import njit

def add_loop(n):
    total = 0
    for i in range(n):
        total += i
    return total

@njit
def add_loop_jit(n):
    total = 0
    for i in range(n):
        total += i
    return total


n = 50_000_000 
add_loop_jit(1000)

t0 = time.perf_counter()
pure_sum = add_loop(n)
pure_sec = time.perf_counter() - t0

t0 = time.perf_counter()
jit_sum = add_loop_jit(n)
numba_sec = time.perf_counter() - t0

print(pure_sum, jit_sum)
print("pure_sec", round(pure_sec, 4))
print("numba_sec", round(numba_sec, 6))