import 'package:ch05/Mehta/p02_count.dart';
import 'package:flutter/material.dart';


class P02Screen01 extends StatefulWidget {
  @override
  _P02Screen01 createState() => _P02Screen01();
}

class _P02Screen01 extends State<P02Screen01> {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Center(
        child: Text("hello world you 1 ${P02Count.maybeof(context)?.count}"),
      ),
    );
  }
}
