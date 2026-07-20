import sys
input = sys.stdin.read().strip()

can_change = True 
for i in range(1, len(input)):
    if input[i].islower():
        can_change = False
        break
    if can_change:
         input = input.swapcase()

print(input)