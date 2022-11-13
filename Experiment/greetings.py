hey = list(input())

for i in range (0, len(hey)-2):
    hey.insert(1, 'e')

print("".join(hey))