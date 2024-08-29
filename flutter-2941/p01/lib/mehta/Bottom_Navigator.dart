import 'package:flutter/material.dart';

import 'Bottom_Navigator_about.dart';
import 'Bottom_Navigator_home.dart';
import 'Bottom_Navigator_profile.dart';

class BottomNavigator extends StatefulWidget {
  @override
  _BottomNavigator createState() => _BottomNavigator();
}

class _BottomNavigator extends State<BottomNavigator> {
  int ind = 0;
  List<Widget> s1 = <Widget>[
    BottomNavigatorHome(),
    BottomNavigatorAbout(),
    BottomNavigatorProfile(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Hello.."),
      ),
      body: s1[ind],
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.purpleAccent,
        currentIndex: ind,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "About"),
          BottomNavigationBarItem(icon: Icon(Icons.picture_in_picture), label: "Profile"),
        ],
      ),
    );
  }
}
