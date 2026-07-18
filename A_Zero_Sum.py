import sys
input = sys.stdin.read().split()
i = 0
t = int(input[i])
i += 1

for _ in range(t):
    n = int(input[i])
    i += 1
    count = 0

    for tc in range(n):
        count += int(input[i])
        i += 1
    
    
    print("YES" if count % 4 == 0 else "NO")