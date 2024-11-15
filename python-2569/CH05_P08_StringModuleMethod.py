

import string


s = "hello Denver \n i am me"

x = string.capwords(s)
print("capwords | ",x)


student_name = "Neha"

formatter  = string.Formatter()

x = formatter.format("Hello {username}, i am coder, {username}",username=student_name)
print("formatter | ",x)