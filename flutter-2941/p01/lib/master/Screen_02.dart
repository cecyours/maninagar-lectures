import 'package:flutter/material.dart';
import 'package:p01/master/my_drawer.dart';


class Screen02 extends StatefulWidget{
  @override
  _Screen02 createState()=> _Screen02();

}

class _Screen02 extends State<Screen02>{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      drawer: MyDrawer(),
      body: Center(
        child: Text("Info"),
      ),
    );
  }

}