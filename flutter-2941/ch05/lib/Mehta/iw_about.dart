
import 'package:ch05/Mehta/iw_count_provide.dart';
import 'package:flutter/material.dart';

class IwAboutM extends StatefulWidget {
  @override
  _IwAboutM createState() => _IwAboutM();
}

class _IwAboutM extends State<IwAboutM> {
  @override
  Widget build(BuildContext context) {

    final counterProvider = Countprovider.of(context);
    return

      Material(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [Text("Home kites!! ${counterProvider?.counter}")],
          ),
        ),

      );
  }
}
