import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Countprovider extends InheritedWidget {
  final int counter;
  final Function() increment;
  final Function() decrement;

  const Countprovider({
    Key? k,
    required this.counter,
    required this.increment,
    required this.decrement,
    required Widget chidY,
  }) : super(key: k, child: chidY);

  static Countprovider? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<Countprovider>();
  }

  @override
  bool updateShouldNotify(Countprovider oldWidget) {
    return oldWidget.counter != counter;
  }
}
