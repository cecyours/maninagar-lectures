import 'dart:math';

class StudentMerit {
  String? name;
  double? marks;
  int? id;

  StudentMerit(String name, double marks, int id) {
    this.name = name;
    this.marks = marks;
    this.id = id;
  }
}

void main() {
  List list = <StudentMerit>[];

  var i;
  var n = 1000000000;
  for (i = 0; i < n; i++) {
    double m = (Random().nextDouble() * 100);
    String marks = m.toStringAsFixed(2);
    list.add(StudentMerit("Student ${i + 1}", double.parse(marks), i + 1));
  }
  print("Hello World...");
  print("\n--------------------\n");

  for (i = 0; i < list.length; i++) {
    StudentMerit s = list[i];
    print(" ${s.id} | ${s.name} | ${s.marks}");
  }

  list.sort((a, b) => b.marks.compareTo(a.marks));

  print("\n--------------------\n");

  for (i = 0; i < list.length; i++) {
    StudentMerit s = list[i];
    print(" ${s.id} | ${s.name} | ${s.marks}");
  }
}
