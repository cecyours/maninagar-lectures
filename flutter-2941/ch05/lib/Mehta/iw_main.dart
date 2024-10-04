import 'package:ch05/Mehta/iw_about.dart';
import 'package:ch05/Mehta/iw_count_provide.dart';
import 'package:ch05/Mehta/iw_home.dart';
import 'package:flutter/material.dart';


class IwMainM extends StatefulWidget {
  @override
  _IwMainM createState() => _IwMainM();
}



class _IwMainM extends State<IwMainM> {
  int index = 0;
  int counter = 0;
  List<Widget> picture = <Widget>[
    IwHomeM(),
    IwAboutM(),
  ];

  void increment(){
    setState(() {
      counter++;
    });
  }

  void decrement(){
    setState(() {
      counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return  Countprovider(counter: counter, increment: increment,  decrement: decrement,chidY: Scaffold(
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

    )
    );
    ;
  }
}
