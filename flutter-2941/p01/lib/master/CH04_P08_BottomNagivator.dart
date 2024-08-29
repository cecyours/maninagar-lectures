

import 'package:flutter/material.dart';
import 'package:p01/master/CH04_P08_screen_about.dart';
import 'package:p01/master/CH04_P08_screen_home.dart';
import 'package:p01/master/CH04_P08_screen_school.dart';

class Ch04P08Bottomnagivator extends StatefulWidget{

  @override
  ScreenTask createState() => ScreenTask();
}

class ScreenTask extends State<Ch04P08Bottomnagivator>
{
  int index = 0;
  List<Widget> screen = <Widget>[
    Ch04P08ScreenHome(),
    Ch04P08ScreenAbout(),
    Ch04P08ScreenSchool(),

  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Hello World"),),
      body: screen[index],
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.orange,
        onTap: (int i){
          setState(() {
            index = i;
          });
        },
        currentIndex: index,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home),label: "Home"),
          BottomNavigationBarItem(icon: Icon(Icons.person),label: "Me"),
          BottomNavigationBarItem(icon: Icon(Icons.school),label: "School"),
        ],
      ),
    );
  }
}