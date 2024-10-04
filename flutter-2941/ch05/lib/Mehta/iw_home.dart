import 'package:ch05/Mehta/iw_count_provide.dart';
import 'package:flutter/material.dart';

class IwHomeM extends StatefulWidget {
  @override
  _IwHomeM createState() => _IwHomeM();
}

class _IwHomeM extends State<IwHomeM> {
  @override
  Widget build(BuildContext context) {
    final counterProvider = Countprovider.of(context);

    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Home screen!! ${counterProvider?.counter}"),
            ElevatedButton(
                onPressed: counterProvider?.increment, child: Text("+")),
            ElevatedButton(
                onPressed: counterProvider?.decrement, child: Text("-")),
          ],
        ),
      ),
    );
  }
}
