import 'dart:math';

import 'package:flutter/material.dart';

class UseState1 extends StatefulWidget {
  @override
  _UseState1 createState() => _UseState1();
}

class _UseState1 extends State<UseState1> {
  int num = 0;

  void inc() {
    setState(() {
      num++;
    });
  }

  void dec() {
    setState(() {
      num--;
    });
  }

  void random1() {
    setState(() {
      num = Random().nextInt(100);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Use State"),
      ),
      body: Material(
        child: Center(
          child: Text("Number is ${num}"),
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: inc,
            hoverColor: Colors.grey,
            child: Icon(Icons.add),
          ),
          SizedBox(
            height: 15,
          ),
          FloatingActionButton(
            onPressed: dec,
            hoverColor: Colors.grey,
            child: Icon(Icons.exposure_minus_1),
          ),
          SizedBox(
            height: 15,
          ),
          FloatingActionButton(
            onPressed: random1,
            hoverColor: Colors.grey,
            child: Icon(Icons.ramp_right),
          ),
        ],
      ),
    );
  }
}
