import 'package:flutter/material.dart';

class ScreenNav01 extends StatefulWidget {
  @override
  _ScreenNav01 createState() => _ScreenNav01();

}

class _ScreenNav01 extends State<ScreenNav01> {
  @override
  Widget build(BuildContext context) {
    return Material(
        child:
        ListView.builder(
          itemCount: 100,
          itemBuilder: (context, index){
            return Container(
              child: Text(
                  "hello ${index}"
              ),
            );
          },

        ),

    );
  }

}