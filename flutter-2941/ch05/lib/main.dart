import 'package:ch05/Mehta/Mehta%20provider/main_provider.dart';
import 'package:ch05/Mehta/change_provider_package%20/main_provider.dart';
import 'package:ch05/Mehta/iw_main.dart';
import 'package:ch05/inherited_modal/inherited_modal_main.dart';
import 'package:ch05/inherited_widget/inherited_main.dart';
import 'package:ch05/topics/P05/im_main_screen.dart';
import 'package:ch05/topics/P06/provider_main_screen.dart';
import 'package:ch05/topics/p01_use_state.dart';
import 'package:ch05/topics/p02_main_screen.dart';
import 'package:ch05/topics/iw/iw_main.dart';
import 'package:flutter/material.dart';

import 'Mehta/Drawer_main.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Mari Screen",
      home: MainProvider1(),
    );
  }
}
