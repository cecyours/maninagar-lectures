import "dart:io";

void main() {
  print("Enter your number 1 : ");
  String? data1 = stdin.readLineSync();

  print("Enter your number 1 : ");
  String? data2 = stdin.readLineSync();

  if (data2 != null && data1 != null) {
    double? d1 = double.tryParse(data1);
    double d2 = double.parse(data2);

    if (d1 != null && d2 != null) {
      double? ans = d1 / d2;
      print("$d1 / $d2 = $ans");
    }
  }
}
