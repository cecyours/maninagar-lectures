import socket
port = 3002
s = socket.socket()
print("socket created  !!!")
s.connect(('127.0.0.1',port))
print("connection succfully")

while True:
    data = s.recv(1024).decode()
    print("SERVER : ",data)
    msg = input("Enter Message : ")
    s.send(msg.encode())