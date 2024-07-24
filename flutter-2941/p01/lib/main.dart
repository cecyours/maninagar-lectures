

import 'package:flutter/material.dart';
import 'package:p01/master/BasicScreen.dart';

void main()=>runApp(MyApp());


class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Mari Screen",
      home: new(),
    );

  }

}