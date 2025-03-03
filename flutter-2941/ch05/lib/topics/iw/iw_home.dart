
import 'package:ch05/topics/iw/iw_counter_provider.dart';
import 'package:flutter/material.dart';



class IwHome extends StatefulWidget {
  @override
  _IwHome createState() => _IwHome();
}

class _IwHome extends State<IwHome> {
  @override
  Widget build(BuildContext context) {
   final counterProvider = IwCounterProvider.of(context);

    return   Material(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Home screen!! ${counterProvider?.counter}"),
              ElevatedButton(onPressed: counterProvider?.increment, child: Text("Click me"))
            ],
          ),
        ),

    );
  }
}
