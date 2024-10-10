import 'package:flutter/material.dart';

class UpdateCounter extends ChangeNotifier {
  int _update = 0;

  int get update => _update;

  void increment() {
    _update++;
    notifyListeners();
  }
}
