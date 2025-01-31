import sys
from PyQt5.QtCore import * 
from PyQt5.QtGui import * 
from PyQt5.QtWidgets import *

btns = ["Red","Green","Blue","Orrange","Sky Blue"]

class Window():
    def __init__(self):
        app = QApplication(sys.argv)
        win = QWidget()
        win.resize(500,400)
        
        boxLayout = QHBoxLayout() # QVBoxLayoyt
        for i in btns:
            b = QPushButton(i)
            boxLayout.addWidget(b) 
        win.setLayout(boxLayout)
        win.setWindowTitle("PyQt")
        win.show()
        sys.exit(app.exec_())
            

if __name__=="__main__":
    w = Window();