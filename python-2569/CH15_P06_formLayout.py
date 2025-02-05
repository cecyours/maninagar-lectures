import sys
from PyQt5.QtCore import * 
from PyQt5.QtGui import * 
from PyQt5.QtWidgets import *

btns = ["Red","Green","Blue","Orrange","Sky Blue","Pink"]

class Window():
    def __init__(self):
        app = QApplication(sys.argv)
        win = QWidget()
        win.resize(500,400)
        form = QFormLayout()
        
        lblUserName = QLabel("User Name")
        eLblUserName = QLineEdit()
        
        form.addRow(lblUserName,eLblUserName)
        
        lblSubjectName = QLabel("Subjects")
        subBoxLayout = QVBoxLayout()
        eLblSubject1 = QLineEdit()
        eLblSubject2 = QLineEdit()
        
        subBoxLayout.addWidget(eLblSubject1)
        subBoxLayout.addWidget(eLblSubject2)
        
        form.addRow(lblSubjectName,subBoxLayout)
        
        btnSubmit  = QPushButton("Kites")
        
        form.addRow(btnSubmit,QLabel("* submit the form for paisa"))
        win.setLayout(form)
        win.setWindowTitle("Form Layout")
        win.show()
        sys.exit(app.exec_())
            

if __name__=="__main__":
    w = Window();