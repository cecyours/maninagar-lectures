import 'package:ch05/inherited_widget/inherited_about.dart';
import 'package:ch05/inherited_widget/inherited_home.dart';
import 'package:ch05/inherited_widget/inherited_provider.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class InheritedMain extends StatefulWidget{
  @override
  _InheritedMain createState()=> _InheritedMain();

}

class _InheritedMain extends State<InheritedMain>{
  int index =0;
  int count = 0;

  List<Widget> glass = <Widget>[
    InheritedHome(),
    InheritedAbout(),
  ];
  void increment(){
    setState(() {
      count++;
    });
  }

  void decrement(){
    setState(() {
      count--;
    });
  }
  @override
  Widget build(BuildContext context) {
    return InheritedProvider(count: count,increment: increment,decrement: decrement,chidpass: Scaffold(
      body: glass[index],
      bottomNavigationBar: BottomNavigationBar(
        onTap: (int e){
          setState(() {
          index = e;
          });

        },
        currentIndex: index,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), backgroundColor: Colors.deepOrangeAccent, label: "home"),
          BottomNavigationBarItem(icon: Icon(Icons.info), backgroundColor: Colors.deepOrangeAccent, label: "About"),

        ],
      ),
    ),
    );

  }

}


