import 'package:flutter/material.dart';
import 'package:p01/master/my_drawer.dart';


class Screen01 extends StatefulWidget{
  @override
  _Screen01 createState()=> _Screen01();

}

class _Screen01 extends State<Screen01>{
  @override
  Widget build(BuildContext context) {
   return Scaffold(
     appBar: AppBar(),
     drawer: MyDrawer(),
     body: Center(
       child: Text("About"),
     ),

   );
  }

}