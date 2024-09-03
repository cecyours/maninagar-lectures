import 'package:flutter/material.dart';

class P01UseState extends StatefulWidget {
  @override
  _P01UseState createState() => _P01UseState();
}

class _P01UseState extends State<P01UseState> {
   int count=0;

  void increment(){
    setState(() {
      count++;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Set State Practicle"),
      ),
      body: Material(
        color: Colors.blueAccent,
        child: Center(
          child: Text("Hello World ${count}"),
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(onPressed: increment,child: Icon(Icons.plus_one),),
          SizedBox(height: 20,),
          FloatingActionButton(onPressed: increment,child: Icon(Icons.plus_one),),
        ],
      ),

    );
  }
}
