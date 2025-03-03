
import 'package:ch05/Mehta/p02_count.dart';
import 'package:flutter/material.dart';

class P02Screen02 extends StatefulWidget {
  @override
  _P02Screen02 createState() => _P02Screen02();
}

class _P02Screen02 extends State<P02Screen02> {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Text("hello world 2 ${P02Count.maybeof(context)?.count}"),
      ),
    );
  }
}
