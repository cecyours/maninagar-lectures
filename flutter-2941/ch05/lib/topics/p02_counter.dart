
import 'package:flutter/material.dart';

class P02Counter extends InheritedWidget{
  final int count;

  const P02Counter({
    super.key,
    required this.count,
    required super.child
});

  static P02Counter? maybeOf(BuildContext context){
    return context.dependOnInheritedWidgetOfExactType<P02Counter>();
  }

  @override
  bool updateShouldNotify(P02Counter oldObject) {
      return count!=oldObject.count;
  }

}