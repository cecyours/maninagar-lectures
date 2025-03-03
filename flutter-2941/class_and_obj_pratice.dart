class Marks{
  late double maths,Js,dbms,total;

  Marks(double maths, double Js, double dbms){
  this.maths = maths;
  this.Js = Js;
  this.dbms = dbms;
  this.total = result(this);
  }
}
var result = (Marks s) => s.maths + s.Js + s.dbms;
class Task{

String? name;
int? id;
late Marks marks;
  Task(String name, int id, Marks marks){
    this.name = name ;
    this.id = id;
    this.marks = marks;
  }


void display(){
  print("Name of student $name and it's id $id marks is ${marks.total}");
}
}

void main(){
  Task task = new Task("Ramesh",1,Marks(88,98,76));
  task.display();
}