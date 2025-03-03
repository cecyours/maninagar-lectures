import 'package:flutter/material.dart';

class new extends StatefulWidget{
  @override
  _new createState(){
    return _new();
}
}

class _new extends State<new>{

  int number = 0;
  void getNumber(){
    getState((){
      number = Random().nextInt(10);
    });
  }

}