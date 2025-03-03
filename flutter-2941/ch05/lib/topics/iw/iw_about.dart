import 'package:ch05/topics/iw/iw_counter_provider.dart';
import 'package:flutter/material.dart';

class IwAbout extends StatefulWidget {
  @override
  _IwAbout createState() => _IwAbout();
}

class _IwAbout extends State<IwAbout> {
  @override
  Widget build(BuildContext context) {

    final counterProvider = IwCounterProvider.of(context);
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
