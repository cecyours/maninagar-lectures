import 'package:flutter/material.dart';

class NavigatorScreen2 extends StatefulWidget{
  @override
  _NavigatorScreen2 createState()=> _NavigatorScreen2();

}


class _NavigatorScreen2 extends State<NavigatorScreen2>{
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(title: Text("Hello 1"),),

      body: Material(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Go to screen 1"),
              ElevatedButton(onPressed: (){
                Navigator.pop(context);
              }, child: Text("Pacho avo.."))
            ],
          ),
        ),
      ),
    );
  }

}