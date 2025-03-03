import socket
port = 3002
s = socket.socket()
print("socket created  !!!")

s.bind(('',port))

s.listen(5)     
print("socket listen to ",port)
print ("socket is listening") 


c,adr = s.accept()
while True:
    msg = input("Enter msg for client : ")
    c.send(msg.encode())
    d = c.recv(1024).decode()
    print("CLIENT : ",d)
    

