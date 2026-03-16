a = int(input())
b = int(input())

if b == 1:
    if 1000 <= a <= 9999:
        print("YES")
    else:
        print("NO")
else:
    if not (1000 <= a <= 9999):
        print("YES")
    else:
        print("NO")