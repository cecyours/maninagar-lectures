

import 'package:flutter/material.dart';
import 'package:p01/master/my_drawer.dart';

class Ch04P09Drawer extends StatefulWidget{
  @override
  _State createState()=>_State();

}

class _State extends State<Ch04P09Drawer>{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return
      Scaffold(
        appBar: AppBar(),
        drawer: MyDrawer(),
        body: Center(
          child: Text("Hello World"),
        ),

      );

  }

}

