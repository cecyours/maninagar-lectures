import 'package:flutter/material.dart';

class DataNotifier extends ChangeNotifier {
  int count = 0;
  Color color = Colors.black;
  DataNotifier(this.count, this.color);

  void increment()
  {
    count++;
    notifyListeners();
    print("dataNotifier LL ");
  }

}

class P02Counter extends InheritedWidget {
  final dataNotifier;

  P02Counter({super.key, required this.dataNotifier, required super.child});

  static P02Counter? maybeOf(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<P02Counter>();
  }

  @override
  bool updateShouldNotify(P02Counter oldObject) {

    print("dataNotifier MM ");
    return dataNotifier != oldObject.dataNotifier;
  }
}
