import 'package:flutter/material.dart';

import 'p02_count.dart';
import 'p02_screen01.dart';
import 'p02_screen02.dart';

class P02MainScreen extends StatefulWidget {
  @override
  _P02MainScreen createState() => _P02MainScreen();
}

class _P02MainScreen extends State<P02MainScreen> {
  int ind = 0;
  List<Widget> screen = <Widget>[
    P02Screen01(),
    P02Screen02(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("App screen 0p0"),
      ),
      body: P02Count(
        count: 1,
        color: Colors.blueAccent,
        child: screen[ind],
      ),
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.orange,
        onTap: (int e) {
          setState(() {
            ind = e;
          });
        },
        currentIndex: ind,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.one_k), label: "screen 1"),
          BottomNavigationBarItem(icon: Icon(Icons.two_k), label: "screen 1"),
        ],
      ),
    );
  }
}
