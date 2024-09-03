import 'package:ch05/topics/p01_use_state.dart';
import 'package:flutter/material.dart';

import 'Mehta/use_state.dart';

void main()=>runApp(MyApp());


class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Mari Screen",
      home: UseState1(),
    );
  }

}