import 'package:flutter/material.dart';

class ScreenNav02 extends StatefulWidget{
  @override
  _ScreenNav02 createState()=>  _ScreenNav02();

}

class _ScreenNav02 extends State<ScreenNav02>{
  @override
  Widget build(BuildContext context) {
    return Material(

      child: Center(
          child: Padding(
            padding: EdgeInsets.all(20),
            child: Text("It is a long established fact that a reader will be distracted by"
                " the readable content of a page when looking at its layout. The point of "
                "using Lorem Ipsum is that it has a more-or-less normal distribution of letters "
                "as opposed to using Content here, content here, making it look like readable English. "
                "Many desktop publishing packages and web pageeditors now use Lorem Ipsum as their "
                "default model text, and a search for lorem ipsumwill uncover many web sites still in "
                "their infancy. Various versions haveevolved over the years, sometimes by accident,sometimes"
                " on purpose injected humour and the like"),
          ),
    ),
    );
  }

}