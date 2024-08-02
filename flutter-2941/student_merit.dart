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

 Future<void> setData(List list) async {
  await dummer(list);
}

Future<void> dummer(List list) async {
  int n = 1000; // Adjust this number as needed
  for (int i = 0; i < n; i++) {
    double m = (Random().nextDouble() * 10);
    String marks = m.toStringAsFixed(2);
    list.add(StudentMerit("Student ${i + 1}", double.parse(marks), i + 1));
  }
  // Simulate a delay to represent async operation
  await Future.delayed(Duration(milliseconds: 100));
}
void main() {
  List list = <StudentMerit>[];

  var i;

  print("\n--------------------\n");
  setData(list);
  print("Hello World...");

  list.sort((a, b) => b.marks.compareTo(a.marks));

  print("\n--------------------\n");

  for (i = 0; i < list.length; i++) {
    StudentMerit s = list[i];
    print(" ${s.id} | ${s.name} | ${s.marks}");
  }
}
