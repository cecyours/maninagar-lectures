

import 'dart:io';

void main(){
  print("Enter value 1");
  String? n1 = stdin.readLineSync();

  print("Enter value 2");
  String? n2= stdin.readLineSync();

  if(n1!=null && n2!=null){
    double? d1 = double.tryParse(n1);
    double? d2 = double.tryParse(n2);

    if(d1!=null && d1!=null){
      double? ans = d1/d2;
      print(" $d1 / $d2 = ans");
    }

  }
}