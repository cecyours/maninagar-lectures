
import 'package:flutter/material.dart';

import 'iw_about.dart';
import 'iw_home.dart';

class IwMain extends StatefulWidget {
  @override
  _IwMain createState() => _IwMain();
}



class _IwMain extends State<IwMain> {
  int index = 0;
  int counter = 0;
  List<Widget> picture = <Widget>[
    IwHome(),
    IwAbout()
  ];

  void increment(){
    setState(() {
      counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return  IwCounterProvider(counter: counter, increment: increment, childComponents: Scaffold(
        appBar: AppBar(
          title: Text("Main Screen"),
        ),
        body: picture[index],
        bottomNavigationBar: BottomNavigationBar(
          onTap: (int e){
            setState(() {
              index = e;
            });
          },
          currentIndex: index,
          items: [
            BottomNavigationBarItem(
                backgroundColor: Colors.orange,
                icon: Icon(Icons.home),label: "Home"
            ),
            BottomNavigationBarItem(
                backgroundColor: Colors.orange,
                icon: Icon(Icons.info),label: "About"
            ),
          ],
        ),

      ))
    ;
  }
}
