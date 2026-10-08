file = open("binaryfile.bin", "wb")
data = b"Python Binary File Example"
file.write(data)
file.close()

file = open("binaryfile.bin", "ab")
file.write(b"\nNew binary data added.")
file.close()


file = open("binaryfile.bin", "rb")
content = file.read()
print(content)
file.close()

with open("binaryfile.bin", "rb") as file:
    content = file.read()
    print(content)