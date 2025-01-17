from abc import ABC,abstractmethod

class task(ABC):
    @abstractmethod
    def report(self):
        pass

class todo(task):
    def report(self):
        print("I am done")
        pass

t = todo()
t.report()