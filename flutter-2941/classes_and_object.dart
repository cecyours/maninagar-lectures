class Marks {
  late double english, hindi, maths, total;

  Marks(double english, double hindi, double maths) {
    this.english = english;
    this.hindi = hindi;
    this.maths = maths;

    this.total = result(this);
  }
}

var result = (Marks m) => m.english + m.hindi + m.maths;

class Task {
  String? name;
  int? id;
  late Marks marks;

  Task(String name, int id, Marks marks) {
    this.id = id;
    this.name = name;
    this.marks = marks;
  }

  // method
  void display() {
    print("I am in display ... $name, $id, ${marks.total}");
  }
}

void main() {
  Task task = new Task("mohan", 32, Marks(80, 80, 80));
  task.display();
}
