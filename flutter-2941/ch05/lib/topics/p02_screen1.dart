import 'package:ch05/topics/p02_counter.dart';
import 'package:flutter/material.dart';

class P02Screen1 extends StatefulWidget {
  @override
  _P02Screen1 createState() => _P02Screen1();
}

class _P02Screen1 extends State<P02Screen1> {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Text("hello world 1 ${P02Counter.maybeOf(context)}"),
      ),
    );
  }
}
