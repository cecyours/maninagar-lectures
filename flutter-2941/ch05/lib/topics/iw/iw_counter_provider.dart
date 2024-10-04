import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class IwCounterProvider extends InheritedWidget {
  final int counter;
  final Function() increment;

  const IwCounterProvider({
    Key? key,
    required this.counter,
    required this.increment,
    required Widget childComponents,
  }) : super(key: key, child: childComponents);

  static IwCounterProvider? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<IwCounterProvider>();
  }

  @override
  bool updateShouldNotify(IwCounterProvider oldWidget) {
    return oldWidget.counter != counter;
  }
}
