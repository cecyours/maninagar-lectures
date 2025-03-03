import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Ch04P01Stack extends StatefulWidget {
  @override
  ScreenState createState() => ScreenState();
}

class ScreenState extends State<Ch04P01Stack> {
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(title: Text("Stack Practicle"),),
      body: Material(
        child: Stack(
          alignment: Alignment.center,
          children: [
            Container(
              width: 100,
              height: 800,
              color:Colors.blueAccent,
            ),
             Container(
                width: 80,
                height: 80,
                color:Colors.red,
              ),
             Container(
              width: 50,
              height: 50,
              color:Colors.black26,
            ),
          ],
        ),
      ),
    );
  }
}
