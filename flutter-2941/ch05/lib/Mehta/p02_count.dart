import 'package:flutter/material.dart';

class P02Count extends InheritedWidget {
    final int count;
    final Color color;

  const P02Count({
    super.key,
    required this.color,
    required this.count,
    required super.child,
  });

  static P02Count? maybeof(BuildContext context) {

    return context.dependOnInheritedWidgetOfExactType<P02Count>();
  }

  @override
  bool updateShouldNotify(P02Count oldobj) {

    return count != oldobj.count;
  }
}
