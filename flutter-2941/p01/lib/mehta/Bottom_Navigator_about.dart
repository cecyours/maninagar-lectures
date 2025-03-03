import 'package:flutter/material.dart';

class BottomNavigatorAbout extends StatefulWidget {
  @override
  _BottomNavigatorAbout createState() => _BottomNavigatorAbout();
}

class _BottomNavigatorAbout extends State<BottomNavigatorAbout> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Material(
      child: Center(
        child: Text("About Page"),
      ),
    );
  }
}
