import 'dart:io';

void main() {
  print("Enter value 1");
  String? n1 = stdin.readLineSync();
  print("Enter value 2");
  String? n2 = stdin.readLineSync();
  print("Enter choice");
  String? choice = stdin.readLineSync();

  if (n1 != null && n2 != null && choice != null) {
    int n = int.parse(n1);
    int m = int.parse(n2);
    int i = int.parse(choice);

    switch (i) {
      case 1:
        int? ans = m + n;
        print("Add $n + $m = $ans ");
        break;
      case 2:
        int? ans1 = n-m;
        print("Subs $n - $m = $ans1");
        break;

      case 3:
        int? ans2 = m * n;
        print("Subs $n * $m = $ans2");
        break;

      case 4:
        double? ans3 = double.parse(n1) / double.parse(n2);
        print("Subs $n / $m = $ans3");
        break;

    }
  }
}
