
import 'package:flutter/material.dart';

class Ch04P08Navigatorscreen2 extends StatefulWidget{
  @override
  _Ch04P08Navigatorscreen2 createState()=> _Ch04P08Navigatorscreen2();

}

class _Ch04P08Navigatorscreen2 extends State<Ch04P08Navigatorscreen2>{
  @override
  Widget build(BuildContext context) {


    return Scaffold(
      appBar: AppBar(title: Text("hello 2"),),
      body: Material(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Go to Screen 1"),
              ElevatedButton(onPressed: (){
              Navigator.pop(context);
              }, child: Text("Back"))
            ],
          ),
        ),
      ),
    );

  }

}