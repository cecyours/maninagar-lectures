
import 'package:flutter/material.dart';

class Ch04P08ScreenAbout extends StatefulWidget{
  @override
  _Screen createState() => _Screen();
}

class _Screen extends State<Ch04P08ScreenAbout>{
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