import 'package:flutter/material.dart';
import 'package:p01/mehta/home.dart';

class lv extends StatefulWidget {
  @override
  _lv createState() {
    return _lv();
  }

}

class _lv extends State<lv> {

  List<String> name = <String>["a", "b", "c"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("hello"),),
      body: Material(
          child: Padding(
              padding: EdgeInsets.all(10),
              child: ListView.builder(
                  itemCount: 2,
                  itemBuilder:(context, index) {
                    return Text("Dummer");
                  },
          )
          )
      ),
    );
  }

}