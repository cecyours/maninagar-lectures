from abc import ABC,abstractmethod

class Task(ABC):
    @abstractmethod
    def report(self):
        pass

class Todo(Task):
    def report(self):
        print(" i am done")
    pass

t= Todo()
t.report()