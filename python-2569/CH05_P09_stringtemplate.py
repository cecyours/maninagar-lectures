from string import Template

t = Template("i am $username, how are u !!")

student = "Mahi"

s = t.substitute(username=student)

print(s)

s = t.substitute(username="Denver")
print(s)