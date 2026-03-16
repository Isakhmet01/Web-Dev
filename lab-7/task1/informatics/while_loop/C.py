n = int(input())

mn = 9
mx = 0

while n > 0:
    d = n % 10
    if d < mn:
        mn = d
    if d > mx:
        mx = d
    n //= 10

print(mn, mx)