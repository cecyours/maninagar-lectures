import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class InheritedProvider extends InheritedWidget{

  final int count;
  final Function() increment;
  final Function() decrement;

  const InheritedProvider({
    Key? k,
    required this.count,
    required this.increment,
    required this.decrement,
    required Widget chidpass,

}): super(key: k, child: chidpass);

  static InheritedProvider? of(BuildContext context){
    return context.dependOnInheritedWidgetOfExactType<InheritedProvider>();
  }
  @override
  bool updateShouldNotify(InheritedProvider oldWidget) {
  return oldWidget.count != count;
  }

}