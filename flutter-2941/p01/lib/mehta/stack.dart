import 'package:flutter/material.dart';

class arr extends StatefulWidget{
  @override
   _arr createState() {
    return _arr();
  }
}

class _arr extends State<arr>{
  @override
  Widget build(BuildContext context) {


    return Scaffold(
      appBar: AppBar(title: Text("hello"),),
      body: Material(
        child: Stack(
          children: [
            Container(
              width: 100,
              height: 100,
              color: Colors.deepPurpleAccent,
            )
          ],
        ),
      ),
    )
  }

}