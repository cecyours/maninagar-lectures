import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ProviderFile extends InheritedWidget {
  final int counter;
  final Function() increment;
  final Function() decrement;

  const ProviderFile({
    Key? key,
    required this.counter,
    required this.increment,
    required this.decrement,
    required Widget childpass,
  }) : super(key: key, child: childpass);

  static ProviderFile? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<ProviderFile>();
  }

  @override
  bool updateShouldNotify(ProviderFile oldWidget) {
    return oldWidget.counter != counter;
  }
}
