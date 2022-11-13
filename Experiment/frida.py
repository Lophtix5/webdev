Frida = list(input())
kons = 'bcdfghjklmnpqrstvwxz'
print(Frida)

for x in range (0,len(Frida)-2):
    for i in range (0, len(kons)):
        if Frida[x] == kons[i]:
            if Frida[x] == Frida[x+1] and Frida[x+1] == Frida[x+2]:
                print(Frida[x])
                Frida[x] = ''
print(Frida)
output = "".join(Frida)
print(output)