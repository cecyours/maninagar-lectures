import 'package:ch05/topics/p02_counter.dart';
import 'package:flutter/material.dart';

class P02Screen2 extends StatefulWidget {
  @override
  _P02Screen2 createState() => _P02Screen2();
}

class _P02Screen2 extends State<P02Screen2> {
  @override
  Widget build(BuildContext context) {
    return Material(
      color: P02Counter.maybeOf(context)?.dataNotifier.color,
      child: Center(
        child: Text("hello world 2 s ${P02Counter.maybeOf(context)?.dataNotifier.count}"),
      ),
    );
  }
}
