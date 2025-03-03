import sys
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

class applicationDemo(QMainWindow):
   def __init__(self, parent = None):
      super(applicationDemo, self).__init__(parent)
		
      layout = QHBoxLayout()
      bar = self.menuBar()
      file = bar.addMenu("File")
      
      newFile = QAction("New File",self)
      file.addAction(newFile)
      
      saveFile = QAction("Save File",self)
      file.addAction(saveFile)
      
      view = bar.addMenu("View")
      
      viewScroll = QAction("Scroll",self)
      view.addAction(viewScroll)
      
      
      layout.addWidget(bar)
      self.setLayout(layout)
      self.setWindowTitle("menu demo")
		
   def processtrigger(self,q):
      print (q.text()+" is triggered")
		
def main():
   app = QApplication(sys.argv)
   ex = applicationDemo()
   ex.resize(400,300)
   ex.show()
   sys.exit(app.exec_())
	
if __name__ == '__main__':
   main()