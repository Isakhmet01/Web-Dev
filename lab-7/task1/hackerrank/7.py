n = int(input())
arr = list(map(int, input().split()))

s = sorted(set(arr))
print(s[-2])