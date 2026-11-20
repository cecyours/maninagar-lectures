#  Using a Loop
text = input("Enter a string: ")
reverse_text = ""
for char in text:
    reverse_text = char + reverse_text
if text == reverse_text:
    print("Palindrome")
else:
    print("Not Palindrome")
