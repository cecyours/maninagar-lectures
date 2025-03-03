import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ExpandedAndAspectRatio extends StatefulWidget {
  @override
  ExpandedAspect createState() => ExpandedAspect();
}

class ExpandedExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          Expanded(
            child: Container(
              color: Colors.orange,
            ),
          ),
          Expanded(
            child: AspectRatioex(),
          )
        ],
      ),
    );
  }
}

class AspectRatioex extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.redAccent,
      child: Center(
        child: AspectRatio(
          aspectRatio: 1 / 3,
          child: Container(
            color: Colors.blue,
          ),
        ),
      ),
    );
  }
}

class ExpandedAspect extends State<ExpandedAndAspectRatio> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("hello"),
      ),
      body: ExpandedExample(),
    );
  }
}
