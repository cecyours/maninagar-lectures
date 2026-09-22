with open("source.jpg", "rb") as source:
    data = source.read()
with open("copy.jpg", "wb") as destination:
    destination.write(data)
print("File copied successfully.")