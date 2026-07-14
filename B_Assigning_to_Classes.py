import sys
input = sys.stdin.read().strip().split()

i = 0
test_case = int(input[i])
i += 1

for _ in range(test_case):
    n = int(input[i])
    i += 1

    temp_arr = []

    count = 2 * n
    while count > 0:
        temp_arr.append(int(input[i]))
        i += 1
        count -= 1

    temp_arr.sort()
    
    print(temp_arr[n] - temp_arr[n-1] )

