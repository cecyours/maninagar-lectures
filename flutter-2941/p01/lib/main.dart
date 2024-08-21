

import 'package:flutter/material.dart';
import 'package:p01/Ch4_Video_tut.dart';
import 'package:p01/master/CH04_P01_Stack.dart';
import 'package:p01/master/CH04_P02_ListView.dart';
import 'package:p01/master/CH04_P03_GridView.dart';
import 'package:p01/master/CH04_P04_VideoPlayer.dart';
import 'package:p01/master/Grid_User_Vid.dart';
import 'package:p01/master/ch04_expanded_and_aspect_ratio.dart';
import 'package:p01/master/ch04_p06_textfield.dart';
import 'package:p01/master/form_validation.dart';
import 'package:p01/master/form_validation_realtime.dart';
import 'package:p01/mehta/Grid%20_Vid_pratice.dart';
import 'package:p01/mehta/home.dart';
import 'package:p01/mehta/pratice.dart';

import 'mehta/Grid_Image.dart';
import 'mehta/Grid_name_desc.dart';
import 'mehta/expanded_and_aspect_ratio.dart';
import 'mehta/form_validation.dart';
import 'mehta/textfield_button.dart';

void main()=>runApp(MyApp());


class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Mari Screen",
      home:  FormValidationRealtime(),
    );

  }

}