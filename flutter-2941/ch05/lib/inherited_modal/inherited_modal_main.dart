import 'package:ch05/inherited_modal/inherited_modal_home.dart';
import 'package:ch05/inherited_modal/inherited_modal_provider.dart';
import 'package:flutter/material.dart';

import 'inherited_modal_about.dart';

class InheritedModalMain extends StatefulWidget {
  @override
  _InheritedModalMain createState() => _InheritedModalMain();
}

class _InheritedModalMain extends State<InheritedModalMain> {
  String ColorOne = "red";
  String ColorTwo = "Orange";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Material(
        child: InheritedModalProvider(
          ColorOne: ColorOne,
          ColorTwo: ColorTwo,
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,

              children: [
                InheritedModalHome(),
                InheritedModalAbout(),
                Container()
              ],
            ),
          ),
        ),
      ),
    );
  }
}
