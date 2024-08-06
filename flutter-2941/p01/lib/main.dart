

import 'package:flutter/material.dart';
import 'package:p01/master/CH04_P01_Stack.dart';
import 'package:p01/master/CH04_P02_ListView.dart';
import 'package:p01/master/CH04_P03_GridView.dart';
import 'package:p01/mehta/home.dart';
import 'package:p01/mehta/pratice.dart';

void main()=>runApp(MyApp());


class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Mari Screen",
      home:  Ch04P03Gridview(),
    );

  }

}