import 'dart:math';

import 'package:flutter/material.dart';

class BasicScreen extends StatefulWidget {
  @override
  _BasicScreenState createState() {
    return _BasicScreenState();
  }
}

class _BasicScreenState extends State<BasicScreen> {
  
  int number = 0;
  void getNumber()
  {
      setState(() {
        number = Random().nextInt(10);
      });
  }
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(title: Text("Number App"),),
      body: Material(
        color: Colors.blueAccent,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Your lucky Number $number",style: TextStyle(color: Colors.white,fontSize: 16),),
              SizedBox(height: 50,),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(onPressed: getNumber, child: Text("Button 1")),
                  SizedBox(width: 20,),
                  ElevatedButton(onPressed: getNumber, child: Text("Button 2")),
                  SizedBox(width: 20,),
                  ElevatedButton(onPressed: getNumber, child: Text("Button 3")),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
