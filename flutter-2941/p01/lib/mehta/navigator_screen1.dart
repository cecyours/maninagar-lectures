import 'package:flutter/material.dart';

import 'navigator_screen2.dart';

class NavigatorScreen1 extends StatefulWidget {
  @override
  _NavigatorScreen1 createState() => _NavigatorScreen1();

}


class _NavigatorScreen1 extends State<NavigatorScreen1> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Hello 2"),),

      body: Material(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Go to screen 2"),
              ElevatedButton(onPressed: () {
                Navigator.push(context,
                MaterialPageRoute(builder: (context)=> NavigatorScreen2()));
              }, child: Text("go "))
            ],
          ),
        ),
      ),
    );
  }

}