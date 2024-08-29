
import 'package:flutter/material.dart';

class Ch04P08ScreenHome extends StatefulWidget{
  @override
  _Screen createState() => _Screen();
}

class _Screen extends State<Ch04P08ScreenHome>{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Material(
      child: Center(
        child: Text("Home Page"),
      ),
    );
  }

}