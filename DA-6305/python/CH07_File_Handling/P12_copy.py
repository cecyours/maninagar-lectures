with open("source.jpeg", "rb") as source:
    data = source.read()
with open("copy.jpeg", "wb") as destination:
    destination.write(data)
print("File copie")