import 'package:ch05/Mehta/Mehta%20provider/provider_file.dart';
import 'package:flutter/material.dart';

class HomeProvider extends StatefulWidget {
  @override
  _HomeProvider createState() => _HomeProvider();
}

class _HomeProvider extends State<HomeProvider> {
  @override
  Widget build(BuildContext context) {
    final counterProvider = ProviderFile.of(context);

    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Home screen!! ${counterProvider?.counter}"),
            ElevatedButton(
                onPressed: counterProvider?.increment, child: Text("+")),
            ElevatedButton(
                onPressed: counterProvider?.decrement, child: Text("-"))
          ],
        ),
      ),
    );
  }
}
