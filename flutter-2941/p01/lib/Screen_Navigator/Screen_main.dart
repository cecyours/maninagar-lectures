import 'package:flutter/material.dart';
import 'package:p01/Screen_Navigator/Screen_nav_03.dart';

import 'Screen_nav_01.dart';
import 'Screen_nav_02.dart';

class ScreenMain01 extends StatefulWidget {
  @override
  _ScreenMain01 createState() => _ScreenMain01();
}

class _ScreenMain01 extends State<ScreenMain01> {
  int ind = 0;
  List<Widget> picture = <Widget>[
    ScreenNav01(),
    ScreenNav02(),
    ScreenNav03(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("App.."),
      ),
      body: picture[ind],
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.purpleAccent,
        onTap: (int e){
          setState(() {
            ind = e;
          });
        },
        currentIndex: ind,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
          BottomNavigationBarItem(icon: Icon(Icons.info), label: "About"),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "Profile"),


        ],
      ),
    );
  }
}
