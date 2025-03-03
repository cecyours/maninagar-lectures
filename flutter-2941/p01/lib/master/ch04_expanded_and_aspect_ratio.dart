import 'package:flutter/material.dart';

class Ch04ExpandedAndAspectRatio extends StatefulWidget {
  @override
  ExpandedState createState() => ExpandedState();
}

class ExpandedExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Column(
        children: [
          Expanded(
            child: Container(
              color: Colors.blue,
            ),
          ),
          Expanded(
            child: AspectRadioExample()
          )
        ],
      ),
    );
  }
}

class AspectRadioExample extends StatelessWidget{
  @override
  Widget build(BuildContext context) {

    return Padding(
      padding: EdgeInsets.all(10),
      child: Center(
        child: AspectRatio(
          aspectRatio:5/2,
          child: Container(
            color: Colors.redAccent,
          ),
        ),
      ),
    );
  }

}

class ExpandedState extends State<Ch04ExpandedAndAspectRatio> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("EA"),
      ),
      body: ExpandedExample(),
    );
  }
}
