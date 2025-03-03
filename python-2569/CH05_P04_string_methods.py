print("{:>15} + {:20} + {:20}".format("------------","------------","------------"))

print("{:>15} | {:20} | {:20}".format("method","input","ouput"))

print("{:>15} + {:20} + {:20}".format("------------","------------","------------"))


s1 = "i am the king"

ans = s1.capitalize()
print("{:>15} | {:20} | {:20}".format("capitalize",s1,ans))


s = "DeVER KiTes"
ans = s.casefold()
print("{:>15} | {:20} | {:20}".format("casefold",s,ans))

s = "kk"
ans = s.center(10,'$')
print("{:>15} | {:20} | {:20}".format("center",s,ans))

s = "i am a king alone"
ans = s.count('am')
print("{:>15} | {:20} | {:20}".format("count",s,ans))


# s = "how are you  ¥"
# ans1 = s.encode()
# ans2 = ans1.decode()
# print("{:>15} | {:20} | {:20}".format("encode",s,ans))
# print(ans1)
# print(ans2)

s = "Singham again"
ans = s.endswith("again")
print("{:>15} | {:20} | {:20}".format("endswith",s,ans))


s = "2\t."
ans = s.expandtabs(20)
print("{:>15} | {:20} | {:20}".format("expandtabs",s,ans))


s = "kites"
ans = s.find('tz')
print("{:>15} | {:20} | {:20}".format("find",s,ans))


s = "kites"
ans = s.index('t')
print("{:>15} | {:20} | {:20}".format("find",s,ans))


s = "ktei10"
ans = s.isalnum()
print("{:>15} | {:20} | {:20}".format("isalnum",s,ans))

s = "apple,banana,cherry"
ans = s.split(",")
print("{:>15} | {:20} ".format("split",s),ans)
