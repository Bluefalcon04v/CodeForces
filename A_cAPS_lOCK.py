import sys 
input = sys.stdin.read().strip()

map = {}
for i in range(0, len(input)):
    if input[i].islower():
       map[i] = input[i]

if len(map) == 0:
    ans  = input.swapcase()
    print(ans)
elif input[0].islower() and len(map) == 1:
    ans = input[0].swapcase() + input[1:].swapcase()
    print(ans)
else:
    print(input)
