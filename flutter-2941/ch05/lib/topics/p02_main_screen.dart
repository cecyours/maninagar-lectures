import 'package:ch05/topics/p02_counter.dart';
import 'package:ch05/topics/p02_screen1.dart';
import 'package:ch05/topics/p02_screen2.dart';
import 'package:flutter/material.dart';


class P02MainScreen extends StatefulWidget {
  @override
  _P02MainScreen createState() => _P02MainScreen();
}

class _P02MainScreen extends State<P02MainScreen> {
  int i = 0;

  List<Widget> picture = <Widget>[
    P02Screen1(),
    P02Screen2(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("App Screen"),
      ),
      body: P02Counter(
        dataNotifier: DataNotifier(1,Colors.white70),
        child: picture[i],
      ),
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: Colors.orange,
        onTap: (int ele) {
          setState(() {
            i = ele;
          });
        },
        currentIndex: i,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.one_k), label: "Screen 1"),
          BottomNavigationBarItem(icon: Icon(Icons.two_k), label: "Screen 2"),
        ],
      ),
    );
  }
}
